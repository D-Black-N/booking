import React from 'react'

export default function AboutUsManagement({ openMenu }) {

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className='admin-about-us' onSubmit={handleClick}>
        <h2>О нас</h2>
        <textarea maxLength={10000} minLength={20}></textarea>
        <input type='submit' value='Изменить' />
      </form>
      <a href='#' onClick={openMenu}>Назад</a>
    </>
  )
}
