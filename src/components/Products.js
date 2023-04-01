import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <input type="text" placeholder='Enter your Product' />
        <nav>
        <Link to ={'features'}>Features</Link>
        <Link to ={'new'}>New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}