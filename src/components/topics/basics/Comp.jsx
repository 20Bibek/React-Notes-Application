import React, { Fragment } from 'react'

const JsxComp = () => {

  const jsxData = {
    topic: "JSX (JavaScript XML)",
    sub_topics: [
      {
        heading: "What is JSX?",
        points: [
          "JSX stands for Javascript XML. JSX is used to  write the HTML-like code in Javascript.",
          "JSX is basically a syntax extension of Javascript. React JSX helps us to write HTML in Javascript and forms the basis of React Development. Using JSX isn't compulsory but it is  highly recommended for  programming in React as it makes the development process easier as the code becomes easy to write and read.",
        ],
        // image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hVwu7tR6Bvf53kKKk8mguF8PCDFG03Xhsg2CY0ODdlSnugWsptyD2x53x89bgsgYqJ4&usqp=CAU"
      },
      {
        heading: "Why JSX is used in React?",
        points: ["It is faster than normal Javascript as it performs optimizations while translating to regular Javascript.",
          "It makes it easier for us to create templates.",
          "Instead of separating the markup and logic in separate files, React uses components for this purpose.",
          " As JSX is an expression, we can use it inside of if statements & for loops, loops, assign  it to variables, accept is an arguments, or return it from functions."],
        // image:"https://miro.medium.com/v2/resize:fit:1400/1*YdQM2_TidZGE1NkxMvjhzw.png"
      },
      {
        heading: "Rules for JSX",
        points: ["Each JSX expression must have a single root element. If you need to return multiple elements, you can wrap them in a single parent element, such as a div, or use React Fragments (<>...</>).",
          "JSX uses camelCase for attribute names instead of HTML's lowercase. For example, use className instead of class, and htmlFor instead of for.", " To add comments in JSX, you must use curly braces. Regular JavaScript comments (// or /* ... */) will not work.", "In JSX, we need to close every self-closing tag.", "In JSX,we cannot use javaScript's keyword as attribute inside tag,so that, javascript engine doesnot get confused in understanding the code. For example,in jsx,we use htmlFor attribute instead of for attribute and className instead of class."],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*vtwBN16GFkH3SQwu8c2oSA.png"
      },
      {
        heading: "Embedding expressions in JSX",
        points: [
          "The JavaScript part is written before the return statement of the function whereas, the JSX part is written inside the return statement.",
          "JSX allows you to embed JavaScript expressions within curly braces { }.",
        ],
        // image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hVwu7tR6Bvf53kKKk8mguF8PCDFG03Xhsg2CY0ODdlSnugWsptyD2x53x89bgsgYqJ4&usqp=CAU"
      },
      {
        heading: "JSX vs Regular JavaScript",
        points: ["JSX allows you to embed JavaScript expressions within curly braces { }. This makes it easy to include dynamic content in your UI.In regular JavaScript, you can use expressions directly, but you cannot embed them in HTML-like syntax. You would typically manipulate the DOM using JavaScript functions.",
          " Comments in JSX must be wrapped in curly braces and use the /* ... / syntax.JavaScript comments can use both single-line (//) and multi-line (/ ... */) syntax.", "In summary, JSX is a syntax extension that allows you to write HTML-like code within JavaScript, primarily for building user interfaces in React. JavaScript, on the other hand, is a programming language used for a wide range of tasks in web development. While they are often used together in React applications, they have distinct roles and syntax."],
        image: "https://miro.medium.com/v2/resize:fit:1106/0*5PM3k9_2C6PdFSEQ.PNG"
      }
    ]
  }

  return (
    <div className='container'>
      <h1>{jsxData.topic}</h1>


      {jsxData.sub_topics.map((ele, index) => {
        return (
          <Fragment key={index}>
            <h2>{ele.heading}</h2>
            <section className='section'>
              <ul>
                {ele.points.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </section>
            <img src={ele.image} width="50%"/>
          </Fragment>
        )
      })}

    </div>
  )
}

export default JsxComp