import React, { useRef, useState, useEffect } from "react";
import "./useref.css";
import { FaRegLightbulb, FaCode, FaClock, FaExclamationCircle } from "react-icons/fa";

const Useref = () => {
  return (
    <div className="container">
      <h1 className="title"><FaRegLightbulb className="icon" /> useRef (Accessing DOM elements and persisting values)</h1>
      <hr />


      <div className="section">
        <h2><FaCode className="icon" /> Introduction</h2>
        <p>The <span className="highlight">useRef</span> hook in React is used to create a mutable reference that persists across renders without causing re-renders. It is commonly used for:</p>
        <ul>
          <li>✅ Accessing and manipulating DOM elements (e.g., focusing an input field)</li>
          <li>✅ Storing previous state values without triggering re-renders</li>
          <li>✅ Keeping track of intervals, timers, or event listeners</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaCode className="icon" /> Basic Syntax of useRef</h2>
        <pre>
{`import { useRef } from "react";

const myRef = useRef(initialValue);`}
        </pre>
        <ul>
          <li>🔹 <span className="highlight">myRef.current</span> holds the reference value.</li>
          <li>🔹 It does not trigger a re-render when updated.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaCode className="icon" /> Accessing and Manipulating the DOM</h2>
        <pre>
{`import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focuses the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;`}
        </pre>
      </div>

      <div className="section">
        <h2><FaClock className="icon" /> Storing Previous State Values</h2>
        <pre>
{`import { useState, useRef, useEffect } from "react";

const PreviousCount = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; 
  });

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default PreviousCount;`}
        </pre>
      </div>

      <div className="section">
        <h2><FaClock className="icon" /> Handling setTimeout and setInterval</h2>
        <pre>
{`import { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h2>Timer: {count}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;`}
        </pre>
      </div>

      <div className="section">
        <h2><FaExclamationCircle className="icon danger" /> Key Differences: useRef vs useState vs useEffect</h2>
        <pre>
{`Feature         | useRef    | useState  | useEffect
------------------------------------------------
Triggers re-render? | ❌ No     | ✅ Yes    | ❌ No
Persists across renders? | ✅ Yes  | ✅ Yes  | ✅ Yes
Used for DOM manipulation? | ✅ Yes  | ❌ No  | ✅ Yes
Stores previous values? | ✅ Yes  | ✅ Yes  | ❌ No
Best for side effects? | ❌ No   | ❌ No   | ✅ Yes`}
        </pre>
      </div>

      <div className="section">
        <h2><FaExclamationCircle className="icon danger" /> Common Mistakes & Best Practices</h2>
        <pre>
{`❌ Modifying useRef and expecting re-renders
✅ useRef does NOT trigger a re-render when updated. If you need the UI to update, use useState.

const ref = useRef(0);
const increment = () => {
  ref.current += 1;
  console.log(ref.current); // ✅ Updates value but does NOT re-render
};

❌ Using useRef for stateful logic that affects UI
✅ Use useState if you need reactivity.
const [count, setCount] = useState(0); // ✅ Triggers re-render`}
        </pre>
      </div>
    </div>
  );
};

export default Useref;
