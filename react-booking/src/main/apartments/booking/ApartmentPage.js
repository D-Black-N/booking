import React from 'react'
import Booking from './Booking'
import Descrioption from '../Descrioption'
import ImageBlock from '../ImageBlock'
import Rewiews from './rewiews/Rewiews'

export default function ApartmentPage({ name, address, note, images, price, info, contacts }) {
  return (
    <div className='apartment'>
      <div className='apartment-container'>
        <div className='images'>
          <ImageBlock images={images} width={450} height={400} />
        </div>
        <Descrioption name={name} address={address} note={note} price={price} info={info} contacts={contacts} />
      </div>
      <Booking />
      <Rewiews />
    </div>
  )
}
