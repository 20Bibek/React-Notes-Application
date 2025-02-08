import React from "react";
import { FaCheckCircle, FaBug, FaSyncAlt, FaClipboardList, FaPlus, FaMinus, FaRedo, FaTrash, FaLightbulb, FaExclamationTriangle, FaListAlt } from "react-icons/fa";
import "./usereducer.css";

const Usereducer = () => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSyncAlt /> useReducer (Alternative to useState for complex state logic)
      </h1>
      <hr />

      <p>
        The <code>useReducer</code> hook is an alternative to <code>useState</code> for managing
        complex state logic in React. It helps when you have multiple state updates that depend on the previous state.
      </p>

      <div className="section">
        <h2>🎯 Why Use useReducer Instead of useState?</h2>
        <ul>
          <li><FaCheckCircle /> Useful for complex state logic – When multiple state updates depend on each other.</li>
          <li><FaClipboardList /> Better structure – Keeps state updates organized and predictable.</li>
          <li><FaSyncAlt /> Good for state transitions – Works well with conditions like "if this happens, do that".</li>
          <li><FaBug /> Easier debugging – State changes are centralized in a single function (reducer function).</li>
        </ul>
      </div>

      <div className="section">
        <h2>🔹 Basic Syntax of useReducer</h2>
        <pre>
{`const [state, dispatch] = useReducer(reducerFunction, initialState);
// state – Current state value.
// dispatch – Function used to trigger state changes.
// reducerFunction – Function that determines how state updates.
// initialState – Starting value of the state.`}
        </pre>
      </div>

      <div className="section">
        <h2>✅ How it Works</h2>
        <ul>
          <li><FaPlus /> <b>ADD_TODO</b> → Adds a new todo to the list.</li>
          <li><FaTrash /> <b>REMOVE_TODO</b> → Removes a todo by ID.</li>
          <li><FaListAlt /> Keeps the logic structured instead of handling everything in useState.</li>
        </ul>
      </div>

      <div className="section">
        <h2>🚀 When Should You Use useReducer?</h2>
        <ul>
          <li><FaCheckCircle /> When state depends on the previous state (e.g., counters, lists).</li>
          <li><FaLightbulb /> When state logic is complex (e.g., multiple actions).</li>
          <li><FaClipboardList /> When you need predictable state updates (e.g., form handling, authentication).</li>
          <li><FaSyncAlt /> When working with Redux-like state management.</li>
        </ul>
      </div>

      <div className="section">
        <h2>⚠️ Common Mistakes & Best Practices</h2>
        <ul>
          <li>
            <FaExclamationTriangle /> <b>❌ Using useReducer for simple state updates</b>  
            <br /> ✅ Use <code>useState</code> when managing simple values like true/false or numbers.
          </li>
          <li>
            <FaExclamationTriangle /> <b>❌ Modifying state directly inside the reducer</b>  
            <br /> ✅ Always return a new state object from the reducer instead of mutating it.
          </li>
          <li>
            <FaExclamationTriangle /> <b>❌ Using multiple useState for related data</b>  
            <br /> ✅ Use <code>useReducer</code> when managing complex state transitions.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>🏆 Step-by-Step Example of useReducer</h2>
        <h3>📝 Example: A Simple Counter App</h3>
        <pre>
{`import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}><FaPlus /></button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}><FaMinus /></button>
      <button onClick={() => dispatch({ type: "RESET" })}><FaRedo /></button>
    </div>
  );
};

export default Counter;`}
        </pre>
      </div>

      <div className="section">
        <h2>🔥 Advanced Example: Managing a Todo List</h2>
        <pre>
{`import { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const initialTodos = [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo List</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: text })}>
        <FaPlus /> Add
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`}
        </pre>
      </div>
    </div>
  );
};

export default Usereducer;