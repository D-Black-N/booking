import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApartmentCard from './ApartmentCard';

export default function Apartments() {
  
  const [apartments, setApartments] = useState([])
  
  useEffect(() => {
    setApartments([
      { 
        id: 1,
        name: 'Park Apartment',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Москва, ул. Тверской бульвар, д. 7',
        short_note: 'Прекрасные апартаменты в центре Москвы с красивым видом',
        full_note: '',
        price: 30000
      },
      { 
        id: 2,
        name: 'Central Apartment',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Москва, ул. Тверской бульвар, д. 7',
        short_note: 'Прекрасные апартаменты в центре Москвы с красивым видом',
        full_note: '',
        price: 10000
      },
      { 
        id: 3,
        name: 'Zelenogradsk',
        images: ['https://res.cloudinary.com/deliveryfood/image/upload/v1649401493/apartments/%D0%BA%D0%B23_dg3gnv.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401492/apartments/%D0%BA%D0%B22_wkirx8.jpg', 
                 'https://res.cloudinary.com/deliveryfood/image/upload/v1649401490/apartments/%D0%BA%D0%B21_zbu5ti.jpg'
                ],
        address: 'г. Зеленоград, ул. Карла Маркса, д. 238, к. 4, кв. 191',
        short_note: 'Прекрасные апартаменты в городе Зеленоград для отдыха',
        full_note: '',
        price: 10000
      }
    ])
  }, [])
  

  return (
    <div className='apartments'>
      {apartments.map(apartment => (
        <ApartmentCard 
          key={apartment.id}
          name={apartment.name}
          images={apartment.images}
          address={apartment.address}
          short_note={apartment.short_note}
          full_note={apartment.full_note}
          price={apartment.price}
        />
      ))}
    </div>
  )
}
