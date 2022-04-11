import React from 'react'
import ReactDOM from 'react-dom'
import ApartmentNote from './ApartmentNote'
import ApartmentPage from './ApartmentPage'
import ImageBlock from './ImageBlock'

export default function ApartmentCard({ name, images, address, short_note, full_note, price }) {

  const handleBookingClick = () => {
    console.log('Переход на страницу апартаментов')
    ReactDOM.render( 
      <ApartmentPage 
        name={name}
        images={images}
        address={address}
        note={full_note}
        price={price}
      />, 
      document.querySelector('.main') 
    )
  }

  return (
    <div className='apartment-card'>
      <ImageBlock images={images} width={320} height={250} />
      <ApartmentNote name={name} address={address} note={short_note} price={price} openApartmentClick={handleBookingClick} />
    </div>
  )
}
