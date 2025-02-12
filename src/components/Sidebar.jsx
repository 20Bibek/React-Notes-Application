import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/sidebar.css"
import Search from './Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Search/>
      
        {/* Introduction */}
        <h2>Introduction</h2>
        <div className='subtopic'>
        <Link className='link' >Introduction</Link>
        <Link className='link' to="gettingstarted">Getting started</Link>
        <Link className='link' to="features">Features</Link>
        <Link className='link' to="component">Components</Link>
        <Link className='link' to="jsx">JSX</Link>

        </div>
        {/* fragments */}

        <h2>Fragments</h2>

        <div className='subtopic'>
        <Link className='link' to="fragments">Fragments</Link>
        </div>

        {/* props */}
        <h2>Props</h2>
        <div className='subtopic'>
        <Link className='link' to="props">Props</Link>

        </div>
        <h2>Conditional Rendering</h2>

        <div className="subtopic">
        <Link className='link' to="conditional">Conditional Rendering</Link>
        </div>


        {/* hooks */}
        <h2>Hooks</h2>

        <div className='subtopic'>
        <Link className='link' to="hooks">Hooks</Link>
        <Link className='link' to="usestate">useState</Link>
        <Link className='link' to="useref">useRef</Link>
        <Link className='link' to="useeffect">useEffect</Link>
        <Link className='link' to="usecontext">useContext</Link>
        <Link className='link' to="forwardref">forwardRef</Link>
        <Link className='link' to="usememo">useMemo</Link>
        <Link className='link' to="usecallback">useCallback</Link>
        <Link className='link' to="usenavigate">useNavigate</Link>
        <Link className='link' to="usereducer">useReducer</Link>

        </div>
        {/* form handling */}

        <h2>Forms</h2>
        <div className='subtopic'>
        <Link className='link' to="formhandling">Form Handling</Link>
        </div>

        {/* routing */}

        <h2>Routing</h2>
        <div className="subtopic">
          <Link className='link' to="routing">Routing</Link>
        </div>

        {/* advance concept */}

       <h2>Advance Concept</h2>
       <div className='subtopic'>
       <Link className='link' to="advanceconcept">Advance Concept</Link>
        <Link className='link' to="reactmemo">ReactMemo</Link>
        <Link className='link' to="axios">Axios</Link>
        <Link className='link' to="hoc">HOC</Link>
        <Link className='link' to="privaterouting">Private Routing</Link>
       </div>
        
    </div>
  )
}

export default Sidebar