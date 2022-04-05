import React from 'react'
import Checkbox from './Checkbox'

export default function Contacts() {
  return (
    <div className='add-contacts'>
      <label htmlFor='contact_name'>Имя</label>
      <input type='text' name='contact_name' id='contact_name' />
      <label htmlFor='phone'>Телефон</label>
      <input type='tel' name='phone' id='phone' />
      <Checkbox />
    </div>
  )
}
