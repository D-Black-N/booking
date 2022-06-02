import React from 'react'
import Select from 'react-select'

export default function InputPersons() {

    const options = [
        {value: 1,  label: '1'},
        {value: 2,  label: '2'},
        {value: 3,  label: '3'},
    ]

    const Style = {
      option : (provided, state) => ({
        ...provided,
      })
    }

  return (
    <div className='select-person'>
      <label htmlFor='persons'>Количество человек</label>
      <Select options={options} id='persons' name='persons' />
    </div>
  )
}
