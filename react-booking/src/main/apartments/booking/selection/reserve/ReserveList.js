import React from 'react'
import SelectedParams from './SelectedParams'

export default function ReserveList({check_in_out_list, person_list = [2, 1]}) {

  const handleSubmitReservation = (event) => {
    event.preventDefault()
    // TODO: сделать отправку формы на сервер для подтверждения брони
  }

  const handleCancelReservation = (event) => {
    event.preventDefault()
    document.querySelector('.reserve-list').style.display = 'none'
    document.querySelector('body').style.overflow = 'scroll'
  }

  return (
    <div className='reserve-list'>
      <div className='reserve-data-list'>
        <h2>Личные данные</h2>
        <SelectedParams dates={check_in_out_list} person_list={person_list} />

        <div className='reserve-person-info-fields'>
          <p className='p-label'>Фамилия:</p>
          <input type={'text'} name='first_name' id='first_name' className='input-person-info' />
        </div>

        <div className='reserve-person-info-fields'>
          <p className='p-label'>Имя:</p>
          <input type={'text'} name='last_name' id='last_name' className='input-person-info' />
        </div>

        <div className='reserve-person-info-fields'>
          <p className='p-label'>Почта:</p>
          <input type={'email'} name='email' id='email' className='input-person-info' />
        </div>

        <div className='reserve-person-info-fields'>
          <p className='p-label'>Телефон:</p>
          <input type={'tel'} name='phone' id='phone' className='input-person-info' /><br/>
        </div>
 
        <div className='reserve-phone-checkbox'>
          <div className='call-type'>
            <input type={'checkbox'} name='phone_call' value="whats_app" id='phone-call' /><label>What's App</label>
          </div>
          <div className='call-type'>
            <input type={'checkbox'} name='phone_call' value="telegram" id='phone-call' /><label>Telegram</label>
          </div>
          <div className='call-type'>
            <input type={'checkbox'} name='phone_call' value="viber" id='phone-call' /><label>Viber</label> <br/>
          </div>
        </div>

        <div className='reservation-cost'>
          <p className='p-label'>Стоимость:</p>
          <p className='p-info'>1000 за сутки</p>
        </div>

        <div className='reserve-submit-button'>
          <input type='button' value='Забронировать' id='reserve-submit' onClick={handleSubmitReservation} />
          <input type='button' value='Отменить' id='reserve-cancel' onClick={handleCancelReservation} />
        </div>

      </div>
    </div>
  )
}
