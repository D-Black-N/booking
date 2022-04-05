import React from 'react'
import ReactDOM from 'react-dom'
import ApartmentNote from './ApartmentNote'
import ApartmentPage from '../booking/ApartmentPage'
import ImageBlock from '../ImageBlock'

export default function ApartmentCard({ name, images, address, short_note, full_note, price, info }) {

  const contact = [
    {
      fio: 'Данил',
      tel: '+79227764790',
      whats_app: true,
      viber: true
    },
    {
      fio: 'Иван',
      tel: '+79992225556',
      whats_app: true,
    }
  ] 

  const handleBookingClick = () => {
    console.log('Переход на страницу апартаментов')
    ReactDOM.render( 
      <ApartmentPage 
        name={name}
        images={images}
        address={address}
        note={full_note}
        price={price}
        info={info}
        contacts={contact}
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
