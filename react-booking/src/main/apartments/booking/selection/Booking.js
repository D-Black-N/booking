import React, { useState } from 'react'
import Calendar from '../calendar/Calendar'
import InputDate from '../InputDate'
import InputPersons from './InputPersons'
import ReserveList from './reserve/ReserveList'


export default function Booking() {
  const [information, setInformation] = useState([])
  const [input_field, setInputField] = useState()

  const handeOpenCalendar = (event) => {
    setInputField(event.target)
    const calendar = document.querySelector('.calendar') 
    if (calendar.style.display === 'inline')
      calendar.style.display = 'none'
    else
      calendar.style.display = 'inline'
  }

  const fieldsValidator = (form, form_data) => {
    return dateValidation(form.querySelectorAll('.block-fields'), form_data.slice(0, 2)) && 
      numberValidation(form.querySelectorAll('.select-person'), form_data.slice(2, 5))
  }

  const dateValidation = (date_fields, in_out_dates) => {
    if (in_out_dates[0].length === 0) {
      inputError(date_fields[0])
      return false
    }
    else
      if (in_out_dates[1].length === 0) {
        inputError(date_fields[1])
        return false
      }
      else {
        let date_parse = in_out_dates[0].split('.')
        const in_date = new Date(date_parse[2], date_parse[1], date_parse[0])
        date_parse = in_out_dates[1].split('.')
        const out_date = new Date(date_parse[2], date_parse[1], date_parse[0])
        if (in_date >= out_date) {
          inputError(date_fields[1])
          return false
        }
        else
          return true
      }
  }

  const numberValidation = (people_fields, peoples) => {
    if (peoples[0] === 'none') {
      inputError(people_fields[0])
      return false
    }
    else
      if (peoples[1] === 'none') {
        inputError(people_fields[1])
        return false
      }
      else
        return true
  }

  const inputError = (field) => {
    field.classList.add('block-fields-focus')
    setTimeout(() => {
      field.classList.remove('block-fields-focus')
    }, 5000);
  }

  const handleClickBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const check_fields = form.querySelectorAll('.input-date')
    const people_fields = form.querySelectorAll('select')
    const form_data = [check_fields[0].value, check_fields[1].value, people_fields[0].value, people_fields[1].value]
    console.log(fieldsValidator(form, form_data))
    if (fieldsValidator(form, form_data)) {
      setInformation(form_data)
      document.querySelector('body').style.overflow = 'hidden'
      const reserve_list_block = document.querySelector('.reserve-list')
      reserve_list_block.style.display = 'flex'
      reserve_list_block.style.top = window.pageYOffset + 'px'
    }
  }

  return (
    <div className='booking'>
      <h2 className='field-header'>Бронирование</h2>
      <div className='date-block'>
        <Calendar field={input_field} />
        <form onSubmit={handleClickBooking} >
          <div className='date-fields'>
            <InputDate openCalendar={handeOpenCalendar} name='date_start' label='Дата заезда' />
            <InputDate openCalendar={handeOpenCalendar} name='date_end' label='Дата выезда' />
            <InputPersons selector_type='кол-во взрослых' />
            <InputPersons selector_type='кол-во детей' />
            <input type='submit' className='create-reservation-button' value='Выбрать' />
          </div>
        </form>
      </div>
      <ReserveList information={information} />
    </div>
  )
}
