import React from "react";
import "./hooks.css";
import { FaCheckCircle, FaCode, FaExclamationTriangle, FaReact } from "react-icons/fa";

const Hooks = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaReact className="icon" /> React Hooks
      </h1>
      <hr />


      <section className="section">
        <h2><FaCode className="icon" /> What are Hooks?</h2>
        <p>
          Hooks are functions in React that allow you to use <strong>state</strong> and <strong>lifecycle features</strong> inside functional components without writing class components. 
          They were introduced in <strong>React 16.8</strong> to simplify component logic and improve reusability.
        </p>
      </section>

      <section className="section">
        <h2><FaExclamationTriangle className="icon warning" /> Why Hooks?</h2>
        <p>
          Before hooks, functional components were <strong>stateless</strong> and could only render UI based on <strong>props</strong>. 
          If you needed state or lifecycle methods, you had to use class components. Hooks eliminate this restriction, 
          making function components <span className="highlight">more powerful</span> and <span className="highlight">easier to manage</span>.
        </p>
      </section>

      <section className="section">
        <h2><FaCheckCircle className="icon success" /> Rules of Hooks</h2>
        <ol>
          <li>
            <strong>Only call hooks at the top level:</strong> Hooks should not be used inside loops, conditions, or nested functions.
            <pre>
              {`function MyComponent() {
  const [count, setCount] = useState(0);
  if (count > 5) {
    console.log("Count is greater than 5");
  }
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}`}
            </pre>
          </li>
          <li>
            <strong>Only call hooks from React functions:</strong> Hooks must be used inside function components or custom hooks.
            <pre>
              {`function MyComponent() {
  const [count, setCount] = useState(0);
  return <p>{count}</p>;
}`}
            </pre>
          </li>
          <li>
            <strong>Custom hooks must start with "use":</strong> Hooks should be prefixed with "use" to be recognized by React.
            <pre>
              {`function useCustomHook() {
  const [data, setData] = useState(null);
  return [data, setData];
}`}
            </pre>
          </li>
          <li>
            <strong>Hooks should be used in the same order in every render:</strong> React tracks hooks by their order in the function.
            <pre>
              {`function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  return <p>{count} - {name}</p>;
}`}
            </pre>
          </li>
          <li>
            <strong>Hooks must be in functional components or custom hooks:</strong> Hooks cannot be used inside class components.
            <pre>
              {`function MyComponent() {
  const [count, setCount] = useState(0);
  return <p>{count}</p>;
}`}
            </pre>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Hooks;
