import React from 'react'

const Reactmemo = () => {
  return (
    <div className='container'>
      <div className="section">
        <h2>
        What is React Memo?
        </h2>
        <p>
        Components in React are designed to re-render whenever the state or props value changes. Also, when a parent component re-renders, so do all of its child components. This can impact our application performance because, even if the change is only intended to affect the parent component, all child components attached to the parent component will be re-rendered. Ideally, child components should only re-render if their state or the props passed to them change.

React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings in cases where the props passed to the child component are the same. This improves performance because it memoizes the result and skips rendering to reuse the last rendered result.
        </p>
      </div>
      <div className="section">
        <img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjqd2j8y38gwp9x9p783f.png" alt="" />
      </div>
      <div className="section">
        <h2>
        How Memoization Works
        </h2>
        <p>
        Memoization is a smart method that helps speed up calculations by remembering answers to questions we've already asked. Imagine you're solving a math problem, and you've already worked out the answer once. Instead of redoing all the calculations every time someone asks the same question, memoization lets you store the answer so you can quickly retrieve it when needed again. It's like having an answer sheet for frequently asked questions!
        </p>
        <h2>
          Functional Components in React
        </h2>
        <p>
        In React, memoization plays a vital role in optimizing all the components' performance, especially for functional components that need to render frequently. When a component function renders, it often relies on certain data or props to generate its output. Memoization allows React to remember the result of the component's render function based on the inputs it receives.
        </p>
      </div>
      <div className="section">
        <h4>
        Storing Results
        </h4>
        <p>
        When a functional component renders, React checks if it has rendered with the same inputs (props and state) previously. If it has, React can retrieve the previously calculated result instead of recomputing it.
        </p>
        <h4>
        Efficient Comparison
        </h4>
        <p>
        React compares the current inputs with the previous ones to determine if anything has changed. If the inputs are identical, React knows that the React components do not need to re-render because it's already got the result it needs.
        </p>
        <h4>
        Preventing Unnecessary Work
        </h4>
        <p>
        By avoiding redundant calculations and re-renders, memoization helps keep the application running smoothly and efficiently.
        </p>
      </div>
      <div className="section">
      <img src="https://miro.medium.com/v2/1*HigXYl3KCWHlvmVk4hRV4Q.gif" alt="" />
      </div>
    </div>
  )
}

export default Reactmemo