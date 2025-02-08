import React from "react";
import "./usestate.css";
import { FaCode, FaLightbulb, FaSync, FaArrowRight } from "react-icons/fa";

const Usestate = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaLightbulb className="icon" /> useState Hook
      </h1>
      <hr />


      <section className="section">
        <h2><FaCode className="icon" /> What is useState?</h2>
        <p>
          <strong>useState</strong> is a React hook that allows functional components to **declare state variables** and manage their values. 
          It returns an **array** containing:
        </p>
        <ul>
          <li><strong>The current state value</strong></li>
          <li><strong>A function to update the state</strong></li>
        </ul>
        <p>Whenever the state updates, React **re-renders** the component to reflect the changes in the UI.</p>
      </section>

      <section className="section">
        <h2><FaSync className="icon success" /> Syntax</h2>
        <p>The <code>useState</code> hook is imported from React and used inside functional components:</p>
        <pre>
          {`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial state: 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
        </pre>
        <p>
          <FaArrowRight className="icon highlight" /> Here, <code>count</code> is the **state variable**, 
          <code>setCount</code> is the **updater function**, and <code>useState</code> initializes the state with **0**.
        </p>
      </section>

      <section className="section">
        <h2><FaLightbulb className="icon warning" /> Functional Updates (Updater Function)</h2>
        <p>
          When using <code>useState</code>, passing a **function** to the **setState function** ensures you always get the **latest** state value.
          This is useful when **multiple updates** might occur simultaneously.
        </p>
        <pre>
          {`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}
        </pre>
        <p>
          <FaArrowRight className="icon success" /> Using <code>prevCount</code> inside the function ensures that **React always works with the most recent state**.
        </p>
      </section>
    </div>
  );
};

export default Usestate;
