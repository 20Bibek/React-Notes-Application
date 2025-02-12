import React from 'react';

const Advanceconcept = () => {
  const data = {
    topic: "Redux and Redux Toolkit",
    sub_topics: [
      {
        heading: "What is Redux?",
        points: [
          "Redux is a state management library for JavaScript applications.",
          "It helps manage application state in a predictable way using a single source of truth.",
          "Uses actions, reducers, and a store to handle state updates."
        ]
      },
      {
        heading: "Core Principles of Redux",
        points: [
          "Single Source of Truth - The state of the entire application is stored in a single store.",
          "State is Read-Only - The only way to modify the state is by dispatching an action.",
          "Changes are made with Pure Functions - Reducers handle state updates and return a new state."
        ]
      },
      {
        heading: "What is Redux Toolkit?",
        points: [
          "Redux Toolkit is the official, recommended way to write Redux logic.",
          "Simplifies Redux setup by providing pre-configured functions.",
          "Includes utilities like createSlice, createAsyncThunk, and configureStore."
        ]
      },
      {
        heading: "Setting Up Redux Toolkit",
        code: `import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

export const { increment, decrement } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });`
      },
      {
        heading: "Benefits of Redux Toolkit",
        points: [
          "Reduces boilerplate code compared to traditional Redux.",
          "Provides built-in middleware for async operations.",
          "Simplifies store configuration and state management."
        ]
      }
    ]
  };

  return (
    <div className='container'>
      <h1>{data.topic}</h1>
      {data.sub_topics.map((ele, index) => (
        <section key={index} className='section'>
          {ele.heading && <h2>{ele.heading}</h2>}
          {ele.points && (
            <ul>
              {ele.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          {ele.code && <pre><code>{ele.code}</code></pre>}
        </section>
      ))}
    </div>
  );
};

export default Advanceconcept;