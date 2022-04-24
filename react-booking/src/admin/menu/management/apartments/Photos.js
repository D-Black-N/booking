import React from 'react'

export default function Photos() {
  return (
    <div className='add-photos'>
      <label htmlFor='photos'>Фотографии</label>
      <input type={'file'} multiple accept='image/jpeg,image/png' name='photos' id='photos' />
    </div>
  )
}
