import React from 'react'

export default function DateBlock({ type }) {
  return (
    <div className='booking-date'>
      <input type='date' name={type}  />
    </div>
  )
}
