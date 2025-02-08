import React from "react";
import "./useeffect.css";
import { FaSync, FaCode, FaClipboardList, FaBolt, FaRocket, FaExclamationTriangle } from "react-icons/fa";

const Useeffect = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSync className="icon" /> useEffect Hook
      </h1>
      <hr />


      <section className="section">
        <h2><FaCode className="icon" /> What is useEffect?</h2>
        <p>
          <strong>useEffect</strong> is a React hook that allows you to perform **side effects** in functional components.  
          Side effects include:
        </p>
        <ul>
          <li>Fetching data from an API</li>
          <li>Updating the DOM</li>
          <li>Subscribing to events</li>
          <li>Setting up timers</li>
        </ul>
        <p>
          In **class components**, side effects were handled using lifecycle methods like:  
          <ul>
            <li><strong>componentDidMount</strong> (Runs when component mounts)</li>
            <li><strong>componentDidUpdate</strong> (Runs when component updates)</li>
            <li><strong>componentWillUnmount</strong> (Runs before unmounting)</li>
          </ul>
          The <code>useEffect</code> hook **replaces all these lifecycle methods** in functional components.
        </p>
      </section>

      <section className="section">
        <h2><FaClipboardList className="icon success" /> Basic Syntax</h2>
        <pre>
          {`import { useEffect } from "react";

useEffect(() => {
  // Code to run when the component renders or updates

  return () => {
    // Cleanup function (runs before re-executing the effect or when the component unmounts)
  };
}, [dependencies]);`}
        </pre>
        <ul>
          <li><strong>First argument:</strong> A function where you write side effects.</li>
          <li><strong>Second argument ([] dependency array):</strong> Determines when the effect runs.</li>
        </ul>
      </section>

      <section className="section">
        <h2><FaBolt className="icon warning" /> Different Ways to Use useEffect</h2>
        
        <h3>1️⃣ Run on Every Render (No Dependency Array)</h3>
        <pre>
          {`useEffect(() => {
  console.log("Component rendered!");
});`}
        </pre>
        <p><strong>📌 Use Case:</strong> If you want to execute logic on **every** render.</p>

        <h3>2️⃣ Run Only Once (on Mount) ([] as Dependency)</h3>
        <pre>
          {`useEffect(() => {
  console.log("Runs only once!");

  return () => {
    console.log("Cleanup before unmounting.");
  };
}, []);`}
        </pre>
        <p><strong>📌 Use Case:</strong> Fetching data, setting up event listeners, or initializing a third-party library.</p>

        <h3>3️⃣ Run When a State/Prop Changes (With Dependencies)</h3>
        <pre>
          {`const [count, setCount] = useState(0);

useEffect(() => {
  console.log(\`Count changed to: \${count}\`);
}, [count]);`}
        </pre>
        <p><strong>📌 Use Case:</strong> Watching state changes and reacting dynamically.</p>

        <h3>4️⃣ Cleanup Function in useEffect</h3>
        <pre>
          {`useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running every second...");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup when component unmounts
  };
}, []);`}
        </pre>
        <p><strong>📌 Use Case:</strong> Removing event listeners, stopping intervals, or closing WebSocket connections.</p>
      </section>

      <section className="section">
        <h2><FaRocket className="icon highlight" /> Real-World Example: Fetching Data</h2>
        <pre>
          {`import { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/notes")
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []); // Runs only once after mount

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;`}
        </pre>
        <p><strong>📌 Why <code>[]</code>? </strong>The fetch request should run **only once** when the component mounts.</p>
      </section>

      <section className="section">
        <h2><FaExclamationTriangle className="icon danger" /> Common Mistakes & Best Practices</h2>
        <ul>
          <li><strong>❌ Avoid setting state inside useEffect without dependencies</strong></li>
          <li>✅ Doing this will cause an **infinite loop**:</li>
        </ul>
        <pre>
          {`useEffect(() => {
  setCount(count + 1); // ❌ Infinite loop
}, []);`}
        </pre>
        <ul>
          <li><strong>❌ Forgetting to clean up effects</strong></li>
          <li>✅ Always clean up timers, listeners, or subscriptions in the return function.</li>
        </ul>
      </section>
    </div>
  );
};

export default Useeffect;
