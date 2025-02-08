import React from 'react'

const Hoc = () => {
  return (
    <div className='container'>
      <div className="section">
        <h2>What is a Higher-Order Component (HOC)?</h2>
        <p>A Higher-Order Component (HOC) is a function that takes a component as input and returns an enhanced component with additional functionality. It follows the higher-order function pattern in JavaScript, where functions can accept other functions as arguments and return new functions.
        HOCs are not a built-in feature of React, but rather a pattern used for reusing component logic.
        </p>
        <h2>Why Use Higher-Order Components?</h2>
        <p>
        HOCs help solve common problems such as:
        ✅ Code Reusability – Share logic across multiple components.
        ✅ Separation of Concerns – Keep UI and logic separate.
        ✅ Enhancing Components Dynamically – Add features like authentication, logging, or performance tracking without modifying the original component.
        </p>
        <img src="https://cdn.prod.website-files.com/670cbf146221ee06c3cdd761/676277a637626ac815ef0b04_676277896780c79dde32dd07_How%2520to%2520Use%2520Higher-Order%2520Components%2520(HOCs)%2520in%2520React.webp" alt="" />
      </div>

      <div className="section">
        <h2>Important Notes on HOCs</h2>
        <p>
        📌 Avoid modifying the original component directly. Always return a new component.
📌 Preserve Props – Use ...props to pass down all original props.
📌 Use Meaningful Names – Wrap components with meaningful names like withAuth, withLogging, etc.
📌 Can Be Nested – You can apply multiple HOCs to a single component.

        </p>
        <h2>HOCs vs. Custom Hooks</h2>
        <pre>
          Feature	                   Higher-Order Component (HOC)	    Custom Hook
        </pre>
        <pre>
        Code Reusability	        ✅ Yes	                              ✅ Yes
        </pre>
        <pre>
        Performance	             ⚠ Can cause extra renders	     ✅ More efficient
        </pre>
        <pre>
        Readability	          ⚠ Harder to debug	             ✅ Easier to read
        </pre>
        <pre>
        Composition	          ✅ Can combine multiple HOCs	    ✅ Composable
        </pre>
      </div>
      <div className="section">
        <h2>
        When to Use HOCs?
        </h2>
        <p>
        ✅ When you need to add the same behavior to multiple components (e.g., logging, authentication, analytics).
✅ When you want to modify a component’s props dynamically without modifying its code.
✅ When you need to add lifecycle methods to functional components (before hooks were introduced).
        </p>
      </div>
    </div>
  )
}

export default Hoc