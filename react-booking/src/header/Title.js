import React from 'react'
import NavBar from './NavBar'

export default function Title() {
  return (
    <div className='title'>
      <div className='logo'></div>
      <div className='info'>
        <div className='name'>BaltikaVisit</div>
        <NavBar />
      </div>
    </div>
  )
}
