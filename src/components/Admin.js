import React from 'react'
import { Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <div>This is Admin Dashboard
        <Outlet/>
    </div>
    
  )
}
