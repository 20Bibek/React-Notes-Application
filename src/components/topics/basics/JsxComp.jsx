import React from 'react'

const JsxComp = () => {
  return (
    <div className='container'>
      <h1>JSX (JavaScript XML)</h1>

<h2>What is JSX?</h2>
<section>
  <ul>
    <li>JSX stands for Javascript XML. JSX is used to  write the HTML-like code in Javascript. </li>
    <li>JSX is basically a syntax extension of Javascript. React JSX helps us to write HTML in Javascript and forms the basis of React Development. Using JSX isn't compulsory but it is  highly recommended for  programming in React as it makes the development process easier as the code becomes easy to write and read.</li>
  </ul>

</section>
<h2>Why JSX is used in React</h2>
<section>
  <ol>
    <li>It is faster than normal Javascript as it performs optimizations while translating to regular Javascript. </li>
    <li>It makes it easier for us to create templates.</li>
    <li>Instead of separating the markup and logic in separate files, React uses components for this purpose. </li>
    <li>As JSX is an expression, we can use it inside of if statements & for loops, loops, assign  it to variables, accept is an arguments, or return it from functions.</li>
  </ol>
</section>

<h2>Rules for JSX</h2>
<section>
  <ol>
    <li>Each JSX expression must have a single root element. If you need to return multiple elements, you can wrap them in a single parent element, such as a div, or use React Fragments (<>...</>).
    </li>
    <li>JSX uses camelCase for attribute names instead of HTML's lowercase. For example, use className instead of class, and htmlFor instead of for.</li>
    <li>
      To add comments in JSX, you must use curly braces. Regular JavaScript comments (// or /* ... */) will not work.
    </li>
    <li>In JSX, we need to close every self-closing tag</li>
    <li>In JSX,we cannot use javaScript's keyword as attribute inside tag,so that, javascript engine doesnot get confused in understanding the code. For example,in jsx,we use htmlFor attribute instead of for attribute and className instead of class</li>

  </ol>
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*vtwBN16GFkH3SQwu8c2oSA.png" alt="" />
</section>
<h2>Embedding expressions in JSX</h2>
<section>
  <ul>
    <li>The JavaScript part is written before the return statement of the function whereas, the JSX part is written inside the return statement.</li>
    <li>JSX allows you to embed JavaScript expressions within curly braces { }.</li>
  </ul>
  <h2>JSX vs Regular JavaScript</h2>
  <ul>
    <li>JSX allows you to embed JavaScript expressions within curly braces { }. This makes it easy to include dynamic content in your UI.In regular JavaScript, you can use expressions directly, but you cannot embed them in HTML-like syntax. You would typically manipulate the DOM using JavaScript functions.</li>
    <li>Comments in JSX must be wrapped in curly braces and use the /* ... / syntax.JavaScript comments can use both single-line (//) and multi-line (/ ... */) syntax.</li>
    <li>In summary, JSX is a syntax extension that allows you to write HTML-like code within JavaScript, primarily for building user interfaces in React. JavaScript, on the other hand, is a programming language used for a wide range of tasks in web development. While they are often used together in React applications, they have distinct roles and syntax.</li>
  </ul>
  <img src="https://image.slidesharecdn.com/reactjs-t2-jsx-220320113654/85/React-js-t2-jsx-2-320.jpg" alt="" />
</section>
    </div>
  )
}

export default JsxComp