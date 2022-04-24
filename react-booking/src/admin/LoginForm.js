import React from 'react'

export default function LoginForm({ loginState }) {

  return (
    <form className='login-form'>
      <label htmlFor='login'>Логин</label>
      <input type={'text'} name='login' id='login' /> 
      <label htmlFor='password'>Пароль</label> 
      <input type={'password'} name='password' id='password' />
      <input type={'submit'} id='login-button' value='Войти' />
    </form>
  )
}
