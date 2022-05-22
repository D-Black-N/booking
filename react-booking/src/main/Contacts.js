import React, { useState } from 'react'

export default function Contacts() {
  const [text, setText] = useState('')

  const apartments = [
    {
      id: 1,
      apartment: 'ParkApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    },
    {
      id: 2,
      apartment: 'CentralApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    },
    {
      id: 3,
      apartment: 'GagarinApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        // {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    }
  ]

  const render_apartment_col = (apartment) => {
    return (<td rowSpan={apartment.contacts.length}>{apartment.apartment}</td>)
  }

  return (
    <div className='contacts'>
      <table className='contacts-table'>
        <thead>
          <tr>
            <th>Апартаменты</th>
            <th>Владелец</th>
            <th>Почта</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          { apartments.map((apartment, key) => (
              apartment.contacts.map((contact, index) => (
                <tr>
                  { text !== apartment.apartment ? <td rowSpan={apartment.contacts.length}>{apartment.apartment}</td> : <></>}
                </tr>
              ))
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
