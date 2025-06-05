import React from 'react'
import NavBar from '../compomemts/NavBar'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div>
  <NavBar/>
  <Outlet/>
  </div>
  )
}

export default MainLayout