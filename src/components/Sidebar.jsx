import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
        {/* Introduction */}

        <Link className='link' to="introduction" >Introduction</Link>
        <Link className='link' to="introduction/gettingstarted">Getting started</Link>
        <Link className='link' to="ntroduction/features">Features</Link>
        <Link className='link' to="introduction/component">Components</Link>
        <Link className='link' to="introduction/conditional">Conditional Rendering</Link>
        <Link className='link' to="introduction/jsx">JSX</Link>

        {/* fragments */}

        <Link className='link' to="fragments">Fragments</Link>

        {/* props */}
        <Link className='link' to="props">Props</Link>


        {/* hooks */}

        <Link className='link' to="hooks">Hooks</Link>
        <Link className='link' to="hooks/usestate">useState</Link>
        <Link className='link' to="hooks/useref">useRef</Link>
        <Link className='link' to="hooks/useeffect">useEffect</Link>
        <Link className='link' to="hooks/usecontext">useContext</Link>
        <Link className='link' to="hooks/forwardref">forwardRef</Link>
        <Link className='link' to="hooks/usememo">useMemo</Link>
        <Link className='link' to="hooks/usecallback">useCallback</Link>
        <Link className='link' to="hooks/usenavigate">useNavigate</Link>
        <Link className='link' to="hooks/usereducer">useReducer</Link>

        {/* form handling */}

        <Link className='link' to="formhandling">Form Handling</Link>

        {/* adsvance concept */}

        <Link className='link' to="advanceconcept">Advance Concept</Link>
        <Link className='link' to="advanceconcept/reactmemo">ReactMemo</Link>
        <Link className='link' to="advanceconcept/axios">Axios</Link>
        <Link className='link' to="advanceconcept/hoc">HOC</Link>
        <Link className='link' to="advanceconcept/privaterouting">Private Routing</Link>
        
    </div>
  )
}

export default Sidebar