import React from 'react';
import { MdOutlineMemory } from "react-icons/md";
import { RxDoubleArrowUp } from 'react-icons/rx';


const Reactmemo = ({scrollToTop}) => {
  const data = {
    topic: "React Memo",
    sub_topics: [
      {
        heading: "What is React Memo?",
        points: [
          "Components in React re-render whenever state or props change.",
          "Parent component re-rendering causes all child components to re-render.",
          "React Memo is a higher-order component that memoizes the rendered output.",
          "Prevents unnecessary renders when props remain the same.",
          "Improves performance by skipping redundant re-renders."
        ]
      },
      {
        image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjqd2j8y38gwp9x9p783f.png"
      },
      {
        heading: "How Memoization Works",
        points: [
          "Memoization speeds up calculations by remembering previously computed results.",
          "Prevents recalculating the same values multiple times.",
          "Improves efficiency by reusing stored results."
        ]
      },
      {
        heading: "Functional Components in React",
        points: [
          "Memoization is crucial for optimizing React functional components.",
          "React remembers rendered output based on received inputs.",
          "Avoids unnecessary re-renders by checking if inputs have changed."
        ]
      },
      {
        heading: "Storing Results",
        points: [
          "React stores previous renders and retrieves them when inputs remain unchanged."
        ]
      },
      {
        heading: "Efficient Comparison",
        points: [
          "React compares current and previous inputs to detect changes."
        ]
      },
      {
        heading: "Preventing Unnecessary Work",
        points: [
          "Memoization avoids redundant calculations and keeps the application efficient."
        ]
      },
      {
        image: "https://miro.medium.com/v2/1*HigXYl3KCWHlvmVk4hRV4Q.gif"
      }
    ]
  };

  return (
    <div className='container'>
      <h1 className='title'><MdOutlineMemory />      {data.topic}</h1>
      <hr />
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
          {ele.image && <img className='advimg' src={ele.image} alt='' />}
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  );
};

export default Reactmemo;