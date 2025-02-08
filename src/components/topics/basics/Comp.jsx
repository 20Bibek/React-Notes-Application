import React from 'react'

const Comp = () => {
  return (
    <div className='container'>
      <h1>Components In React</h1>
      <h2>What is Component in React?</h2>
      <section>
        <ul>
          <li>
            React components are the building blocks of ReactJS applications. They help to break the UI into smaller, reusable chunks, making the code easier to manage & maintain.
          </li>
        </ul>
      </section>

      <h2>Types of components: </h2>
      <section>
        <ul>
          <li>
            Components can be class-based and function-based and each type plays an important role in building dygamic & interactive web applications.
          </li>
          <li>
            Functionial components are just live javascript functions that accept properties and return a React element.
          </li>
          <li>
            Class based components  are more complex than functional components. It requires you to extend from React. Component & create a render function which returns a React element. You can pass date from one class to other class components. You can create a class  by defining a class that extends component and has a render function.
          </li>
        </ul>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*6-bN_FxEMfRTHZSouF8DLg.png" alt="" />
      </section>

      <h2>Exporting of Components</h2>
      <section>
        <ul>
          <li>
            You can export components in two main ways: default export and named export.
          </li>
          <li>
            <h4>Default Export:</h4> When you use export default, you can import the component without using curly braces.
          </li>
          <li>
            <h4>Named Export:</h4>With named exports, you can export multiple components or functions from a single file. You must use curly braces when importing.
          </li>
        </ul>
        <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs82i6fitzwlcc9k700uh.png" alt="" />
      </section>
      <h2>What is component nesting?</h2>
      <section>
        <ul>
          <li>
            Component nesting in React refers to the practice of placing one component inside another component. This allows developers to build complex user interfaces by composing smaller, reusable components together. Nesting components is a fundamental concept in React, as it promotes modularity, reusability, and separation of concerns.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Comp