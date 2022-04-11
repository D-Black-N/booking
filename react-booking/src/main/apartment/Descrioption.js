import React from 'react'

export default function Descrioption({ name, address, note, price, info, contacts }) {
  return (
    <div className='description'>
      <h1 className='field-header'>{name}</h1>

      <div className='note'>
        <h3 className='field-header'>Описание</h3>
        <p className='text-field'>{note}</p>
      </div>

      <div className='information'>
        <h3 className='field-header'>Информация</h3>
        <p className='text-field'>{info}</p>
      </div>

      <div className='address'>
        <h3 className='field-header'>Адрес</h3>
        <p className='text-field'>{address}</p>
      </div>

      <div className='contacts'>
        <h3 className='field-header'>Контакты</h3>
        <p className='text-field'>{contacts}</p>
      </div>

      <div className='price'>
        <h2 className='field-header'>Стоимость брони: {price} &#8381; за сутки</h2>
        <p className='text-field'>{info}</p>
      </div>

    </div>
  )
}
