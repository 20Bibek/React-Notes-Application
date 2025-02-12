import React, { Fragment } from 'react'

const ReactFragment = () => {
  const reactFragmentData = {
    topic: "React Fragment",
    sub_topics: [
      {
        heading: "What is React Fragment?",
        points: [
          " A React Fragment is a feature in React that allows you to group multiple elements without adding an extra node to the DOM.",
          "This is particularly useful when you want to return multiple elements from a component without wrapping them in a parent element like a div, which can lead to unnecessary nesting in the DOM structure.",
        ],
        image: "https://miro.medium.com/v2/resize:fit:844/1*EQiGK-12WEZ7alNFXA8r0A.png"
      },
      {
        heading: "Types of Fragments",
        points: ["Shorthand Syntax for Fragment : It allows you to use Empty Tags instead of React.Fragment. This is a more concise way to create fragments and is often preferred for its simplicity.You can't use key prop with Short Syntax Fragment.",
          " React.Fragment : It is the standard way to create a fragment. It is a component that can wrap multiple children without adding an extra DOM node. You can also use the key prop with React.Fragment when rendering lists of items. When rendering a list of items, you can provide a key prop to React.Fragment to help React identify which items have changed, are added, or are removed."],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*YdQM2_TidZGE1NkxMvjhzw.png"
      }
    ]
  }

  return (
    <div className='container'>
      <h1>{reactFragmentData.topic}</h1>

      {reactFragmentData.sub_topics.map((ele, index) => {
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
              <img src={ele.image} width="50%"/>
            </section>
          </Fragment>
        )
      })}


    </div>
  )
}

export default ReactFragment