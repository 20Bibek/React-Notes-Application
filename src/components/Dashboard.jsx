import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'

const Dashboard = () => {
    
  return (
    <div className='dashboard'>
        <Navbar/>
        <Outlet/>
     
    </div>
  )
}

export default Dashboard;