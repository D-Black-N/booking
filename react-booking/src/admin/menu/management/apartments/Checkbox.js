import React from 'react'

export default function Checkbox() {
  return (
    <>
      <label htmlFor="phone">Моб.</label>
      <input type='checkbox' name='phone' id='phone' value='WhatsApp'/>
      <label htmlFor="phone">Viber</label>
      <input type='checkbox' name='phone' id='phone' value='WhatsApp' />
      <label htmlFor="phone">Whats App</label>
      <input type='checkbox' name='phone' id='phone' value='WhatsApp' />
    </>
  )
}
