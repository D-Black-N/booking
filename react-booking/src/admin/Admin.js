import React, { useState } from 'react'
import AdminMenu from './menu/AdminMenu'
import LoginForm from './LoginForm'
import AboutUsManagement from './menu/management/AboutUsManagement'
import ApartManagement from './menu/management/apartments/ApartManagement'
import ContactsManagement from './menu/management/ContactsManagement'
import SalesManagement from './menu/management/SalesManagement'
import AdminHeader from './menu/management/AdminHeader'

export default function Admin() {

  const [authToken, setAuthToken] = useState(true)
  const [selectedPage, setSelectedPage] = useState(0)

  const handleOpenMenu = () => {
    setSelectedPage(0)
  }

  const manager = [
    <AdminMenu setPage={setSelectedPage} />, 
    <AboutUsManagement openMenu={handleOpenMenu} />, 
    <ApartManagement openMenu={handleOpenMenu} />, 
    <ContactsManagement openMenu={handleOpenMenu} />, 
    <SalesManagement openMenu={handleOpenMenu} />
  ]

  return (
    <div className='admin-container'>
      <AdminHeader />
      { authToken ?  manager[selectedPage] : <LoginForm loginState={setAuthToken} />}
    </div>
  )
}
