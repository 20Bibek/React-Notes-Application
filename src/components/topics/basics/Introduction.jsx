import React from 'react'
import { Outlet, RouterProvider } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>
      <div className='topdiv'>
        <div className='txt-container'>
          <h1>Let's Get Started With React</h1>
        </div>
        <div className='img-container'>
        <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="" />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Introduction