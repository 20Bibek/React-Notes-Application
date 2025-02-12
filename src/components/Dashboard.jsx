import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet, useParams } from 'react-router-dom'
import Footer from './Footer'

const Dashboard = () => {
    
  return (
    <div className='dashboard'>
        <Navbar/>
        
        <Outlet/>
     <Footer/>
    </div>
  )
}

export default Dashboard;