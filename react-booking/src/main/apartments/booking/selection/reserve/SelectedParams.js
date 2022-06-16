import React from 'react'

export default function SelectedParams({ information }) {
  return (
    <div className='reserve-selected-params'>
      <div className='reserve-param'>
        <p className='p-label'>Дата заезда:</p> <p className='p-info'>{information[0]}</p>
      </div >
      
      <div className='reserve-param'>
        <p className='p-label'>Дата выезда:</p> <p className='p-info'>{information[1]}</p>
      </div>

      <div className='reserve-param'>
        <p className='p-label'>Количество взрослых:</p> <p className='p-info'>{information[2]}</p>
      </div>

      <div className='reserve-param'>
        <p className='p-label'>Количество детей:</p> <p className='p-info'>{information[3]}</p>
      </div>

    </div>
  )
}
