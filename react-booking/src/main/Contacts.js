import React, { useState } from 'react'
import Telegram from '../images/logs/telegram.png'
import WhatsApp from '../images/logs/whatsapp.png'
import Viber from '../images/logs/viber.png'

export default function Contacts() {
  const [text, setText] = useState('')

  const apartments = [
    {
      id: 1,
      name: 'ParkApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    },
    {
      id: 2,
      name: 'CentralApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    },
    {
      id: 3,
      name: 'GagarinApartment',
      contacts: [
        {name: 'Danil', phone: '89227764790', email: 'danil-nasibullin@mail.ru', whats_app: true, viber: true, telegram: true},
        {name: 'Maks', phone: '89227764790', email: 'grandvitaro07@gmail.com', telegram: true},
      ]
    }
  ]

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
          { apartments.map(apartment => (
            apartment.contacts.map((contact, index) => (
              <tr>
                { index === 0 ? <td rowSpan={apartment.contacts.length}>{apartment.name}</td> : <></>}
                <td>{contact.name} </td>
                <td>{contact.email}</td>
                <td className='phone-number'>
                  <div>
                    {contact.phone}
                  </div>
                  <div>
                    {contact.telegram ? <img src={Telegram} height='40px' /> : <></>}
                    {contact.whats_app ? <img src={WhatsApp} height='40px' /> : <></>}
                    {contact.viber ? <img src={Viber} height='40px' /> : <></>}
                  </div>
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  )
}
