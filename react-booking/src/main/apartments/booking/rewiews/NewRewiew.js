import React from 'react'

export default function NewRewiew() {

  const handleClickAddRewiew = (event) => {
    event.preventDefault()
    // Запрос к БД на создание 
  }

  return (
    <form className='new-rewiew' onSubmit={handleClickAddRewiew}>
      <h2>Добавьте свой отзыв</h2>
      <div className='send-rewiew'>
        <textarea maxLength={100} minLength={5}></textarea>
        <input type='submit' className='add-rewiew' value='Добавить отзыв' />
      </div>
    </form>
  )
}
