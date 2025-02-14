import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./styles/sidebar.css"
import Search from './Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Search/>
      
        {/* Introduction */}
        <h2>Introduction</h2>
        <div className='subtopic'>
        <NavLink id='link' className={({isActive}) => (isActive ? "active" : '')} >Introduction</NavLink>
        <NavLink className='link' to="gettingstarted">Getting started</NavLink>
        <NavLink className='link' to="features">Features</NavLink>
        <NavLink className='link' to="component">Components</NavLink>
        <NavLink className='link' to="jsx">JSX</NavLink>

        </div>
        {/* fragments */}

        <h2>Fragments</h2>

        <div className='subtopic'>
        <NavLink className='link' to="fragments">Fragments</NavLink>
        </div>

        {/* props */}
        <h2>Props</h2>
        <div className='subtopic'>
        <NavLink className='link' to="props">Props</NavLink>

        </div>
        <h2>Conditional Rendering</h2>

        <div className="subtopic">
        <NavLink className='link' to="conditional">Conditional Rendering</NavLink>
        </div>


        {/* hooks */}
        <h2>Hooks</h2>

        <div className='subtopic'>
        <NavLink className='link' to="hooks">Hooks</NavLink>
        <NavLink className='link' to="usestate">useState</NavLink>
        <NavLink className='link' to="useref">useRef</NavLink>
        <NavLink className='link' to="useeffect">useEffect</NavLink>
        <NavLink className='link' to="usecontext">useContext</NavLink>
        <NavLink className='link' to="forwardref">forwardRef</NavLink>
        <NavLink className='link' to="usememo">useMemo</NavLink>
        <NavLink className='link' to="usecallback">useCallback</NavLink>
        <NavLink className='link' to="usenavigate">useNavigate</NavLink>
        <NavLink className='link' to="usereducer">useReducer</NavLink>

        </div>
        {/* form handling */}

        <h2>Forms</h2>
        <div className='subtopic'>
        <NavLink className='link' to="formhandling">Form Handling</NavLink>
        </div>

        {/* routing */}

        <h2>Routing</h2>
        <div className="subtopic">
          <NavLink className='link' to="routing">Routing</NavLink>
        </div>

        {/* advance concept */}

       <h2>Advance Concept</h2>
       <div className='subtopic'>
       <NavLink className='link' to="advanceconcept">Advance Concept</NavLink>
        <NavLink className='link' to="reactmemo">ReactMemo</NavLink>
        <NavLink className='link' to="axios">Axios</NavLink>
        <NavLink className='link' to="hoc">HOC</NavLink>
        <NavLink className='link' to="privaterouting">Private Routing</NavLink>
       </div>
        
    </div>
  )
}

export default Sidebar