import React from 'react'

export default function Contacts() {

  let contacts = [
    {id: 1, name: 'danil', phone: '+79227764790', email: 'grandvitaro07@gmail.com'},
    {id: 2, name: 'ilnur', phone: '+79510121246', email: 'ilnur@yandex.com'},
    {id: 3, name: 'olga',  phone: '+79174686401', email: 'nasibullina@mail.ru'}
  ]

  return (
    <>
      <h2>Контакты</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Почта</th>
          </tr>
        </thead>
        <tbody>
          { contacts.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.phone}</td>
              <td>{person.email}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  )
}
