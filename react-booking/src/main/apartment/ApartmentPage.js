import React from 'react'
import Booking from './Booking'
import Descrioption from './Descrioption'
import ImageBlock from './ImageBlock'

export default function ApartmentPage({ name, address, note, images, price }) {
  return (
    <div className='apartment'>
      <div className='apartment-container'>
        <div className='images'>
          <ImageBlock images={images} width={450} height={400} />
        </div>
        <Descrioption name={name} address={address} note={note} price={price} />
      </div>
      <Booking />
    </div>
  )
}
