import React, { useState } from 'react'
import Calendar from '../calendar/Calendar'
import InputDate from '../InputDate'
import InputPersons from './InputPersons'

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
    const form = event.target.parentNode
    // console.log(form.querySelectorAll('.input-date'))
    const date_fields = form.querySelectorAll('.input-date')
    if (DATE_FORMAT.test(date_fields[0].value) && DATE_FORMAT.test(date_fields[1].value)) {
      // Выполнить запрос к БД
    }
    else {
      if (!DATE_FORMAT.test(date_fields[0].value))
        date_fields[0].focus()
      else
        date_fields[1].focus()
    }
  }

  return (
    <div className='booking'>
      <h2 className='field-header'>Бронирование</h2>
      <div className='date-block'>
        <Calendar field={input_field} />
        <form>
          <div className='date-fields'>
            <InputDate openCalendar={handeOpenCalendar} name='date_start' label='Дата заезда' />
            <InputDate openCalendar={handeOpenCalendar} name='date_end' label='Дата выезда' />
            <InputPersons />
            <input type='submit' className='create-reservation' value='Выбрать' onClick={handleClickBooking} />
          </div>
        </form>
      </div>
    </div>
  )
}
