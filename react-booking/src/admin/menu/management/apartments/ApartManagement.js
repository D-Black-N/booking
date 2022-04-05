import React from 'react'
import ApartInfo from './ApartInfo'
import ApartName from './ApartName'
import Contacts from './Contacts'
import Photos from './Photos'

export default function ApartManagement({ openMenu }) {

  const handleSendApartClick = (event) => {
    event.preventDefault()
  }

  return (
    <div className='apart-management'>
      <form onSubmit={handleSendApartClick} id='apart-form'>
        <Photos />
        <ApartName />
        <ApartInfo />
        <Contacts />
        <input type={'submit'} value='Подтвердить' id='submit-apart'/>
      </form>
      <a href='#' onClick={openMenu}>Назад</a>
    </div>
  )
}
