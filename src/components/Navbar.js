import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const navStyling =({isActive})=>{
        return {
            fontWeight:isActive?"bold":"normal",
            textDecoration:isActive?"none":"underline",
            fontSize:'large'
        }
    }
  return (
    <nav className='primary_nav'>
        <NavLink style={navStyling} to={'/'}>Home</NavLink>
        <NavLink style={navStyling} to={'/about'}>About</NavLink>
        <NavLink style={navStyling} to={'/products'}>Products</NavLink>
    </nav>
  )
}
