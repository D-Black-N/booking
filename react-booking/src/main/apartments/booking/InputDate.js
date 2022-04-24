import React from 'react'

export default function InputDate({ openCalendar, name, label }) {
  return (
    <div className='block-fields'>
      <label htmlFor={name}>{label}</label>
      <input type='text' readOnly onClick={openCalendar} className='input-date' name={name} id={name} />
    </div>
  )
}
