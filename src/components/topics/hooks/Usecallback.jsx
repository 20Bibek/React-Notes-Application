import React from "react";
import { FaRocket, FaCheckCircle, FaExclamationTriangle, FaSyncAlt, FaBolt, FaListAlt, FaBrain, FaFilter, FaLightbulb, FaBug, FaClipboardList } from "react-icons/fa";
import "./usereducer.css";


const Usecallback = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSyncAlt /> useCallback (Optimizing Functions)
      </h1>
      <hr />
      <p>
        The <code>useCallback</code> hook in React memoizes functions, preventing unnecessary re-creations during re-renders.
        This is useful when passing functions as props to child components or when using dependencies inside <code>useEffect</code> or event handlers.
      </p>

      <div className="section">
        <h2>🎯 Why Use useCallback?</h2>
        <ul>
          <li><FaBolt /> <b>Optimizes performance</b> – Prevents functions from being re-created on every render.</li>
          <li><FaRocket /> <b>Avoids unnecessary re-renders</b> – Helps when passing functions as props to memoized child components.</li>
          <li><FaSyncAlt /> <b>Works well with useEffect and event handlers</b> – Prevents infinite loops in effects.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔹 Basic Syntax of useCallback</h2>
        <pre>
{`const memoizedFunction = useCallback(() => {
  // Function logic here
}, [dependencies]);`}
        </pre>
        <ul>
          <li><FaBrain /> <b>useCallback returns a memoized function</b> that only changes if its dependencies change.</li>
          <li><FaClipboardList /> If dependencies don’t change, the function reference stays the same.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🏆 Step-by-Step Example of useCallback</h2>
        <h3>📝 Example: Preventing Unnecessary Function Re-Creation</h3>
        <pre>
{`import { useState, useCallback } from "react";

const Counter = ({ increment }) => {
  console.log("Counter component re-rendered");
  return <button onClick={increment}>Increment</button>;
};

const MemoizedCounter = React.memo(Counter);

const App = () => {
  const [count, setCount] = useState(0);

  // 🔥 Memoizing function using useCallback
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <MemoizedCounter increment={increment} />
    </div>
  );
};

export default App;`}
        </pre>
        <ul>
          <li><FaListAlt /> <b>The increment function</b> is memoized using useCallback.</li>
          <li><FaCheckCircle /> <b>The Counter component</b> is wrapped in React.memo to prevent unnecessary re-renders.</li>
          <li><FaRocket /> <b>useCallback prevents function re-creation</b> across renders.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔥 Optimizing useEffect with useCallback</h2>
        <h3>Example: Fetching Data Without Infinite Loops</h3>
        <pre>
{`import { useState, useEffect, useCallback } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  // 🔥 Memoizing fetch function with useCallback
  const fetchData = useCallback(() => {
    console.log("Fetching data...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0, 5)));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ✅ Only runs once, avoids infinite loop

  return (
    <div>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default FetchData;`}
        </pre>
        <ul>
          <li><FaFilter /> <b>fetchData is memoized</b> using useCallback.</li>
          <li><FaBrain /> <b>useEffect runs only once</b>, avoiding an infinite loop.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🎯 When Should You Use useCallback?</h2>
        <ul>
          <li><FaCheckCircle /> When passing functions as props to <b>memoized child components</b> (React.memo).</li>
          <li><FaClipboardList /> When using functions inside <b>useEffect</b> to avoid infinite loops.</li>
          <li><FaBolt /> When handling <b>event listeners</b> inside components.</li>
          <li><FaBrain /> When optimizing <b>performance-sensitive applications</b>.</li>
        </ul>
      </div>

      <div className="section">
        <h2>⚠️ Common Mistakes & Best Practices</h2>
        <ul>
          <li><FaExclamationTriangle /> <b>❌ Using useCallback everywhere</b>
            <br /> ✅ Only use it when a function causes unnecessary re-renders.
          </li>
          <li><FaExclamationTriangle /> <b>❌ Not adding dependencies</b>
            <br /> ✅ Always include all dependencies in the dependency array.
          </li>
          <li><FaExclamationTriangle /> <b>❌ Using useCallback instead of useMemo</b>
            <br /> ✅ Use <code>useMemo</code> for memoizing values, <code>useCallback</code> for memoizing functions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Usecallback;
