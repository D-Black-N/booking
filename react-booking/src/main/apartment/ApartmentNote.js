import React from 'react'

export default function ApartmentNote({ name, note, address, price, openApartmentClick }) {
  return (
    <div className='card-note'>
      <h2 className='card-name'>{name}</h2>
      
      <div className='address'>
        <h3 className='field-header'>Адрес</h3>
        <p className='text-field'>{address}</p>
      </div>

      <div className='note'>
        <h3 className='field-header'>Описание</h3>
        <p className='text-field'>{note}</p>
      </div>

      <div className='price'>
        <h3 className='field-header'>Стоимость: {price} &#8381;</h3>
      </div>

      <div className='button'>
        <input type='button' value={'Забронировать'} className='booking-button' onClick={openApartmentClick} />
      </div>
    </div>
  )
}
