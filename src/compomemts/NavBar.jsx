import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {

  const menus =[
    {id:1,menus:"Login", path:"/login"},
    {id:2,menus:"Register", path:"/register"},
    {id:3,menus:"Todolist", path:"/todolist"},
    
  ]
  return (
    <nav>
      {menus.map(item =>
        <NavLink className="h-13 bg-white flex items-center px-10 gap-6" 
        key={item.id} to={item.path}>
          {item.menus}
        </NavLink>
      )}
    </nav>
  )
}

export default NavBar