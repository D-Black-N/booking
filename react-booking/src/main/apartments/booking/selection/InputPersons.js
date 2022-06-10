import React from 'react'

export default function InputPersons({selector_type}) {

    const options = [1, 2, 3, 4, 5]

  return (
    <div className='select-person'>
      <label htmlFor='persons'>{selector_type[0].toUpperCase() + selector_type.slice(1)}</label>
      <select name='persons'>
        <option disabled selected>Выберите {selector_type}</option>
        { options.map(element => (
          <option value={element}>{element}</option>
        )) }
      </select>
    </div>
  )
}
