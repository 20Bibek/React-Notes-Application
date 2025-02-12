import React, { Fragment } from 'react'
import { CgComponents, CgExtensionAdd, CgPerformance } from 'react-icons/cg';
import { FaCode, FaRandom, FaReact, FaSync } from 'react-icons/fa';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { PiStackOverflowLogoLight } from 'react-icons/pi';


const reactFeatures = {
  title: "Key Features of React",
  topImage:"https://miro.medium.com/max/1225/1*I9eEGngIcmn7Ckcoxq2pxA.png",
  para:["Created by Facebook, ReactJS is a JavaScript library designed for crafting dynamic and interactive applications, elevating UI/UX for web and mobile platforms. Operating as an open-source, component-based front-end library, React is dedicated to UI design and streamlines code debugging by employing a component-oriented approach.","We will discuss about the following featured of React:"],
  list:["JSX(JavaScript Syntax Extension)", " Virtual DOM", "One-way Data Binding","Performance","Extension","Conditional Statements","Components","Declarative","Simplicity"
],
  features: [
    {
      id: 1,
      icon:<FaSync className='iconh2'/>,
      name: "JSX (JavaScript Syntax Extension)",
      description: ["JSX is a syntax extension that allows writing HTML structures inside JavaScript. It makes code more readable and easier to write, as it closely resembles HTML. JSX is then compiled to JavaScript using Babel before rendering in the browser."],
      image: "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087871/cover_image/retina_1708x683/staging.toptal.net_javascript_emulating-react-jsx-in-vanilla-javascript-d2d1bd365b34cc8d9f524e4f88237a2a.png"
    },
    {
      id: 2,
      icon:<FaRandom  className='iconh2'/>,
      name: "Virtual DOM",
      description: ["React uses a Virtual DOM to improve performance. Instead of updating the entire webpage whenever changes occur, React creates a virtual copy of the DOM, compares it with the previous state, and updates only the modified parts, making it faster and more efficient."],
      image: "https://cdn-images-1.medium.com/max/927/1*CqdIWZy0NMPQhYx2rKzo9g.png",
      steps: [
        {
          id: 1,
          name: "Initial Rendering",
          description: "React creates a Virtual DOM representation of the actual DOM. This virtual copy is a JavaScript object that mirrors the real DOM structure.",
        },
        {
          id: 2,
          name: "State Change & New Virtual DOM Creation",
          description: "When the state or props change, React creates a new Virtual DOM tree, representing the updated UI without modifying the real DOM yet.",
        },
        {
          id: 3,
          name: "Diffing Algorithm (Reconciliation)",
          description: "React compares the previous Virtual DOM with the newly created Virtual DOM using an algorithm called reconciliation. It identifies the differences between the two.",
        },
        {
          id: 4,
          name: "Minimal Updates to the Real DOM",
          description: "After detecting the changes, React updates only the necessary elements in the real DOM instead of re-rendering the entire page, improving performance.",
        },
        {
          id: 5,
          name: "Efficient Batch Updates",
          description: "React groups multiple updates together and applies them in a batch process to reduce unnecessary DOM manipulations, making the application more efficient.",
        }
      ]
    },
    {
      id: 3,
      icon:<PiStackOverflowLogoLight className='iconh2'/>,
      name: "One-way Data Binding",
      description:[ "One-way data binding is a data binding technique where data flows in one direction, usually from parent components to child components. This means that changes to the data automatically update the UI, but changes to the UI do not automatically update the data.", "One-way data binding is useful when you want to display a value in a UI element, but don't need to track changes to the UI element. "],
      image: "https://sfdchub.com/wp-content/uploads/2023/03/One-way-data-binding-in-LWC.jpg"
    },
    {
      id: 4,
      icon:<CgPerformance className='iconh2'/>,
      name: "Performance",
      description: ["React is optimized for performance through techniques like Virtual DOM, asynchronous rendering, and efficient state management. It avoids unnecessary re-renders and updates only the required components."],
      image: "https://miro.medium.com/v2/resize:fit:1086/1*f9hhX-ajYfrr3Z2NLJsRfw.png"
    },
    {
      id: 5,
      icon:<CgExtensionAdd className='iconh2'/>,
      name: "Extension",
      description: ["In React, 'extension' refers to the ability to add new functionalities or features to your application by integrating external libraries or frameworks","React extends its capabilities through libraries like React Router (for navigation), Redux (for state management), and React Native (for building mobile applications). This makes React a powerful and flexible tool for development."],
      image: "https://s3.amazonaws.com/angularminds.com/blog/cover/10%20essential%20vscode%20extensions%20for%20react%20development%20-%20vscode%20extensions%20for%20react-20240405095101556.jpg"
    },
    {
      id: 6,
      icon:<FaCode className='iconh2'/>,
      name: "Conditional Statements",
      description: ["React allows developers to use JavaScript conditional statements inside JSX, making it easy to show or hide components dynamically using expressions like ternary operators or logical && conditions."],
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4r0fr0b7ll58mwbvq67f.png"
    },
    {
      id: 7,
      icon:<CgComponents className='iconh2'/>,
      name: "Components",
      description:['In React, "components" are the fundamental building blocks of a user interface, essentially reusable pieces of code that define a specific part of the webpage, allowing developers to create complex applications by combining these components together; they can be either "functional components" (simple JavaScript functions) or "class components" (more complex, using ES6 classes), and both types can manage their own state and receive props (data passed from parent components) to dynamically render the UI. ', "There are two main types of components in React:"],
      image: "https://www.patterns.dev/img/reactjs/react-components@1.5x.svg",
      subTopics: [
        {
          type: "Functional Components",
          explanation: "Functional components are simple JavaScript functions that return JSX. They are lightweight and primarily used for UI rendering. These components rely on React Hooks for state management and side effects."
        },
        {
          type: "Class Components",
          explanation: "Class components extend React.Component and have their own state and lifecycle methods. They are more powerful but are being replaced by functional components due to the introduction of Hooks."
        }
      ]
    },
    {
      id: 8,
      icon:<FaReact className='iconh2'/>,
      name: "Simplicity",
      description: ["React follows a simple design pattern, making it easy to learn and use. Its component-based architecture, clear state management, and declarative approach simplify development and maintenance."],
      image: "https://miro.medium.com/v2/resize:fit:1400/1*qE2SbHwwJeOnKLkuXj7FRA.png"
    },
    {
      id: 9,
      icon:<FaReact className='iconh2'/>,
      name: "Declarative",
      description: ["Declarative programming in React is a way to build user interfaces by describing the desired outcome, rather than the steps needed to achieve it. This makes it easier to build and maintain complex applications. ","A Declarative UI is an approach where developers describe what the UI should look like rather than specifying how to update it step by step."],
      image: "https://files.speakerdeck.com/presentations/0eb0297254ba4bdabb389fba689dadbe/slide_13.jpg"
    }
  ]
};


const Features = () => {
  return (
    <div className="container">
      <h1><MdOutlineFeaturedPlayList className='iconh1'/>{reactFeatures.title}</h1>
      <hr />

      <section className="section">
      {reactFeatures.para.map((par,idx)=>(
          <p key={idx}>
          {par}
          </p>
          ))
        }
        <div className={`para-image ${1 % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <div className="para">
        {
          reactFeatures.list.map((lists,idx)=>(
            <ul key={idx}>
            <li>{lists}</li>
            </ul>
            ))
        }
          </div>

         <div className='image'>
          <img src={reactFeatures.topImage} alt="" />
          </div>
        </div>
      </section>

      {reactFeatures.features.map((feature,index) => (
        <section key={index} className="section">
          <h2>{feature.icon}{feature.name}</h2>
          <div className={`para-image ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
           <div className="para">
             {
              feature.description.map((desc,idx)=>
              (
                <p key={idx}>{desc}</p>
              ))
             }
           </div>

           <div className='image'>
            <img src={feature.image} alt={feature.name} />
          </div>

          </div>
           {/* Display subtopics if they exist (for "Components" feature) */}
           {feature.subTopics && (
              <p>
                {feature.subTopics.map((sub, idx) => (
                  <div key={idx} className="subtopic">
                    <h3>{sub.type}</h3>
                    <p>{sub.explanation}</p>
                  </div>
                ))}
              </p>
            )}
            {/* virtual dom */}
            {feature.steps && (
              <p>
                {feature.steps.map((step,idx) => (
        <div key={idx}>
          <div className="step-content">
            <h3>{step.name}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
              </p>
            )
            }
        </section>
      ))}
    </div>
  )
}

export default Features