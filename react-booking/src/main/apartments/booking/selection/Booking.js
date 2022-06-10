import React, { useState } from 'react'
import Calendar from '../calendar/Calendar'
import InputDate from '../InputDate'
import InputPersons from './InputPersons'
import ReserveList from './reserve/ReserveList'

const DATE_FORMAT = /\w{2}\.\w{2}\.\w{4}/

export default function Booking() {

  const [input_field, setInputField] = useState()

  const handeOpenCalendar = (event) => {
    setInputField(event.target)
    const calendar = document.querySelector('.calendar') 
    if (calendar.style.display === 'inline')
      calendar.style.display = 'none'
    else
      calendar.style.display = 'inline'
  }

  const handleClickBooking = (event) => {
    event.preventDefault()
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    const form = event.target.parentNode
    const date_fields = form.querySelectorAll('.input-date')
    const check_in = new Date(date_fields[0].value.replace(pattern,'$3-$2-$1')) 
    const check_out = new Date(date_fields[1].value.replace(pattern,'$3-$2-$1')) 
    if (check_in > check_out) {
      date_fields[0].parentNode.parentNode.focus()
    }
    else {
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
      <ReserveList />
    </div>
  )
}
