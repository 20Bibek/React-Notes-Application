import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>Introduction
      <Outlet/>
    </div>
  )
}

export default Introduction