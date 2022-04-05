import React from 'react'
import ReactDOM from 'react-dom'

export default function AdminMenu({ setPage }) {

  const handleClick = (event) => {
    setPage(Number(event.target.id))
  }

  const pages = ["О нас", "Апартаменты", "Контакты", "Скидки"]

  return (
    <div className='admin-menu' onClick={handleClick}>
      { pages.map((text, index) => (
        <input type='button' key={index} id={index + 1} value={text} className='admin-select-button' />
      ))}
    </div>
  )
}
