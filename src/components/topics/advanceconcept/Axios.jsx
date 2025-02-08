import React from 'react'

const Axios = () => {
  return (
    <div className='container'>
      <div className="section">
        <h2>
        What is Axios?
        </h2>
        <p>
        Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.

This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.
Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project. 
This library is very popular among developers. You can check on GitHub and you will find 78k stars on it. 
        </p>
      </div>
      <div className="section">
        <h2>
        Need of Axios in React
        </h2>
        <p>
        Axios allows you to communicate with the APIs in your React project. The same tasks can also be performed by using AJAX, but Axios provide you more functionality and features and that helps you in building your application quickly. 

Axios is a promise-based library, so you need to implement some promise-based asynchronous HTTP requests. 
        </p>
        <img src="https://blogs.purecode.ai/blogs/wp-content/uploads/2024/02/http_request_yurrhv.gif" alt="" />
      </div>
      <div className="section">
        <h2>
          Advantages of using Axios in React
        </h2>
        <p>
        Simplicity: Clean API with Promises for asynchronous operations.
Flexibility: Supports interceptors, cancellation, and global error handling.
Compatibility: Works seamlessly in browsers and Node.js.
Security: Built-in CSRF protection and JSON data handling.
Community: Large support base with extensive documentation.
        </p>
      </div>
      <div className="section">
        <h2>
        CRUD Operations Using Axios
        </h2>
        <p>
        Create: To create a new item, you can use the Axios POST method to send a request to the server with the new item’s data.
        Read: To read data, you can use the Axios GET method to fetch data from the server.
        Update: To update an item, you can use the Axios PUT method to send a request to the server with the updated item’s data.
        Delete: To delete an item, you can use the Axios DELETE method to send a request to the server with the item’s ID.
        </p>
      </div>
      <div className="section">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240730125031/a2.gif" alt="" />
      </div>
    </div>
  )
}

export default Axios