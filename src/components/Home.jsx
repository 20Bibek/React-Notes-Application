import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import "./styles/home.css"

const Home = () => {
  return (
    <div className='main'>
   
       <Sidebar/>
    
       <Outlet/>
 
    </div>
  )
}

export default Home