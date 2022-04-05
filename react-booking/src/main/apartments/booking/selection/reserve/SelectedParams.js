import React from 'react'

export default function SelectedParams({dates = ['10.06.2022', '12.06.2022'], person_list}) {
  return (
    <div className='reserve-selected-params'>
      <div className='reserve-param'>
        <p className='p-label'>Дата заезда:</p> <p className='p-info'>{dates[0]}</p>
      </div >
      
      <div className='reserve-param'>
        <p className='p-label'>Дата выезда:</p> <p className='p-info'>{dates[1]}</p>
      </div>

      <div className='reserve-param'>
        <p className='p-label'>Количество взрослых:</p> <p className='p-info'>{person_list[0]}</p>
      </div>

      <div className='reserve-param'>
        <p className='p-label'>Количество детей:</p> <p className='p-info'>{person_list[1]}</p>
      </div>

    </div>
  )
}
