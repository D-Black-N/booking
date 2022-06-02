import React from 'react'
import Calendar from '../../../images/logs/calendar.png'

export default function InputDate({ openCalendar, name, label }) {
  return (
    <div className='block-fields'>
      <label htmlFor={name}>{label}</label>
      <div className='date-field'>
        <input type='text' readOnly onClick={openCalendar} className='input-date' name={name} id={name} />
        <img src={Calendar} />
      </div>
    </div>
  )
}
