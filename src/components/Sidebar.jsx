import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link className='link' to="/introduction" >Introduction</Link>
        <Link className='link' to="/introduction/features">Features</Link>
        <Link className='link' to="/introduction/gettingstarted">Getting started</Link>
        <Link className='link' to="/introduction/component">Components</Link>
        <Link className='link' to="/introduction/conditional">Conditional Rendering</Link>
        <Link className='link' to="/introduction/jsx">JSX</Link>

        <Link className='link' to="/fragments">Fragments</Link>
        <Link className='link' to="/props">Props</Link>

        <Link className='link' to="/hooks">Hooks</Link>
        <Link className='link' to="/hooks/usestate">useState</Link>
        <Link className='link' to="/hooks/useref">useRef</Link>
        <Link className='link' to="/hooks/useeffect">useEffect</Link>
        <Link className='link' to="/hooks/usecontext">useContext</Link>
        <Link className='link' to="/hooks/forwardref">forwardRef</Link>
        <Link className='link' to="/hooks/usememo">useMemo</Link>
        <Link className='link' to="/hooks/usecallback">useCallback</Link>
        <Link className='link' to="/hooks/usenavigate">useNavigate</Link>
        <Link className='link' to="/hooks/usereducer">useReducer</Link>
        <Link className='link' to="/hooks">Hooks</Link>
    </div>
  )
}

export default Sidebar