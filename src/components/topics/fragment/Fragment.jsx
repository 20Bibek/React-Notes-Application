import React from 'react'

const Fragment = () => {
  return (
    <div className='container'>
      <h1>React Fragment</h1>
      <h2>What is React Fragment?</h2>
      <section>

        <ul>
          <li>
            A React Fragment is a feature in React that allows you to group multiple elements without adding an extra node to the DOM.
          </li>
          <li>
            This is particularly useful when you want to return multiple elements from a component without wrapping them in a parent element like a div, which can lead to unnecessary nesting in the DOM structure.
          </li>
        </ul>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hVwu7tR6Bvf53kKKk8mguF8PCDFG03Xhsg2CY0ODdlSnugWsptyD2x53x89bgsgYqJ4&usqp=CAU" alt="" />

      </section>
      <h2>Types of Fragments</h2>
      <section>
        <ol>
          <li>
            <h4> Short Syntax Fragment (Shorthand):</h4>
            The shorthand syntax for fragments allows you to use Empty Tags instead of React.Fragment. This is a more concise way to create fragments and is often preferred for its simplicity.You can't use key prop with Short Syntax Fragment.
          </li>
          <li>
            <h4>  React.Fragment:</h4>
            React.Fragment is the standard way to create a fragment. It is a component that can wrap multiple children without adding an extra DOM node. You can also use the key prop with React.Fragment when rendering lists of items.
            When rendering a list of items, you can provide a key prop to React.Fragment to help React identify which items have changed, are added, or are removed.
          </li>
        </ol>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*YdQM2_TidZGE1NkxMvjhzw.png" alt="" />
      </section>
    </div>
  )
}

export default Fragment