import React from "react";
import { FaRocket, FaCheckCircle, FaExclamationTriangle, FaSyncAlt, FaBolt, FaListAlt, FaBrain, FaFilter, FaLightbulb, FaBug, FaClipboardList } from "react-icons/fa";
import "./usereducer.css";


const Usememo = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSyncAlt /> useMemo (Performance Optimization)
      </h1>
      <hr />

      <p>
        The <code>useMemo</code> hook in React optimizes performance by memoizing expensive calculations.
        It prevents unnecessary recalculations when a component re-renders, ensuring better efficiency.
      </p>

      <div className="section">
        <h2>🎯 Why Use useMemo?</h2>
        <ul>
          <li><FaBolt /> <b>Avoids unnecessary calculations</b> – Only recalculates values when dependencies change.</li>
          <li><FaRocket /> <b>Improves performance</b> – Helps when working with large datasets or expensive computations.</li>
          <li><FaSyncAlt /> <b>Prevents unnecessary re-renders</b> – Ensures that functions return cached results instead of recalculating every time.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔹 Basic Syntax of useMemo</h2>
        <pre>
{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        </pre>
        <ul>
          <li><FaBrain /> <b>useMemo caches (memoizes)</b> the result of computeExpensiveValue(a, b).</li>
          <li><FaClipboardList /> It only recalculates when <code>a</code> or <code>b</code> change.</li>
          <li><FaCheckCircle /> If <code>a</code> and <code>b</code> do not change, it returns the previously stored value, avoiding unnecessary calculations.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🏆 Step-by-Step Example of useMemo</h2>
        <h3>📝 Example: Optimizing a Slow Function</h3>
        <pre>
{`import { useState, useMemo } from "react";

// Simulating an expensive calculation  
const slowFunction = (num) => {
  console.log("Computing...");
  for (let i = 0; i < 1000000000; i++) {} // Delay loop  
  return num * 2;
};

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  // 🔥 Memoizing the expensive calculation  
  const computedValue = useMemo(() => slowFunction(input), [input]);

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
      <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default MemoExample;`}
        </pre>
        <ul>
          <li><FaListAlt /> <b>slowFunction(input)</b> is an expensive computation (simulated with a loop).</li>
          <li><FaCheckCircle /> <b>useMemo caches</b> the result to prevent unnecessary calculations.</li>
          <li><FaRocket /> The function only re-runs when <b>input</b> changes, not on every render.</li>
          <li><FaSyncAlt /> Clicking "Re-render" updates count but does not trigger slowFunction again.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔥 Optimizing a Large List with useMemo</h2>
        <h3>Example: Optimizing a Large List Filtering</h3>
        <pre>
{`import { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" }
];

const FilterList = () => {
  const [query, setQuery] = useState("");

  // 🔥 Memoizing the filtered list  
  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <input type="text" placeholder="Search users..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;`}
        </pre>
        <ul>
          <li><FaFilter /> Every time the user types in the search bar, <b>query</b> updates.</li>
          <li><FaBrain /> <b>useMemo ensures</b> that the list is only filtered when <b>query</b> changes.</li>
          <li><FaRocket /> Without useMemo, every re-render would re-run <b>users.filter()</b>, even if query is the same.</li>
          <li><FaSyncAlt /> This improves performance, especially when handling large lists.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🎯 When Should You Use useMemo?</h2>
        <ul>
          <li><FaCheckCircle /> When working with <b>expensive calculations</b> (e.g., loops, API data processing).</li>
          <li><FaClipboardList /> When <b>filtering/sorting large lists</b>.</li>
          <li><FaBolt /> When optimizing <b>component re-renders</b> in performance-critical applications.</li>
          <li><FaBrain /> When dealing with <b>complex derived state</b> that shouldn’t be recalculated unnecessarily.</li>
        </ul>
      </div>

      <div className="section">
        <h2>⚠️ Common Mistakes & Best Practices</h2>
        <ul>
          <li>
            <FaExclamationTriangle /> <b>❌ Using useMemo everywhere</b>  
            <br /> ✅ Only use it when necessary. Premature optimization can make code harder to read.
          </li>
          <li>
            <FaExclamationTriangle /> <b>❌ Not adding dependencies</b>  
            <br /> ✅ Always specify all dependencies in the dependency array.
          </li>
          <li>
            <FaExclamationTriangle /> <b>❌ Using useMemo instead of useCallback for functions</b>  
            <br /> ✅ If you need to memoize a function, use <code>useCallback</code> instead of <code>useMemo</code>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Usememo;
