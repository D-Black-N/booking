import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import AboutUs from '../main/AboutUs'
import Contacts from '../main/Contacts'
import Apartments from '../main/apartment/Apartments'
import Booking from '../main/Booking'

export default function NavBar() {

  const [selected, setSelected] = useState(5)

  let elements_array = [<AboutUs />, <Contacts />, <Apartments />, <Booking />]

  const handleСlick = (event) => {
    const target = event.target
    const element = target.tagName == 'P' ? target.parentNode : target
    element.classList.add('clicked')
    setSelected(Number(element.id))
    if ((selected != 5) && (selected != element.id))
      element.parentNode.childNodes[selected].classList.remove('clicked')
    ReactDOM.render(elements_array[Number(element.id)], document.querySelector('.main'))
  }
  
  return (
    <div className='nav-bar'>
      <ul onClick={handleСlick}>
        <li id='0'><p>О нас</p></li>
        <li id='1'><p>Контакты</p></li>
        <li id='2'><p>Апартаменты</p></li>
        <li id='3'><p>Бронирование</p></li>
      </ul>
    </div>
  )
}
