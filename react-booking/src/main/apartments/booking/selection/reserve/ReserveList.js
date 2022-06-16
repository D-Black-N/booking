import React from 'react'
import SelectedParams from './SelectedParams'
import axios from 'axios'

export default function ReserveList({information}) {

  const handleSubmitReservation = (event) => {
    event.preventDefault()
    const form = event.target
    console.log(form.querySelector('.reserve-phone-checkbox').querySelectorAll('input').map)
    const params = {
      in_date: information[0], 
      out_date: information[1],
      person: information[2],
      child: information[3],
      first_name: form.querySelector('#first_name').value,
      last_name: form.querySelector('#last_name').value,
      email: form.querySelector('#email').value,
      phone: form.querySelector('#phone').value,
      phone_type: []
    }
    // axios.post('/')
  }

  const handleCancelReservation = (event) => {
    event.preventDefault()
    document.querySelector('.reserve-list').style.display = 'none'
    document.querySelector('body').style.overflow = 'scroll'
  }

  return (
    <div className='reserve-list'>
      <form className='reserve-data-list'>
        <h2>Личные данные</h2>
        <SelectedParams information={information} />

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
          <input type='submit' value='Забронировать' id='reserve-submit' onClick={handleSubmitReservation} />
          <input type='button' value='Отменить' id='reserve-cancel' onClick={handleCancelReservation} />
        </div>

      </form>
    </div>
  )
}
