import React from 'react'
import Calendar from './calendar/Calendar'
import DateBlock from './DateBlock'

export default function Booking() {
  return (
    <div className='booking'>
      <h2 className='field-header'>Бронирование</h2>
      <div className='date-block'>
        <Calendar />
        <input type='date' />
      </div>
    </div>
  )
}
