import React from 'react'
import { Link } from 'react-router-dom'

const FirstPage = () => {
  return (
    <div>FirstPage
        <button><Link to="/home">Explore More</Link></button>
    </div>
  )
}

export default FirstPage