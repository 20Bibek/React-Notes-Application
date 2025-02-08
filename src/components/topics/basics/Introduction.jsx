import React from 'react'
import './introduction.css'
import { FaReact } from "react-icons/fa";
const Introduction = () => {
  return (
      <div className='container'>
        <h1><FaReact />Introduction To react js.</h1>
        <hr />
        <div className='txt-container'>
          <section className="section">
          <h2>What is ReactJS?</h2>
          <p>ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.</p>
          <li>It is developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, resuable compopnents and active community support.</li>
          <li>Uses a virtual DOM for faster updates.</li>
          <li>Supports a declarative approach to designing UI components.</li>
          <li>Ensures better application control with one-way data binding.</li>
          </section>

          
          <section className="section">
          <h2>Framework vs library vs package vs module</h2>
          <p>As a software developer, this is one of the questions that is often asked, and one of a big source of confusion. The difference between frameworks, libraries, packages and modules, what does each one of them represent.</p>
          <h4>Module</h4>
          <p>Is the smallest piece of software. A module is a set of methods or functions ready to be used somewhere else.</p>
          <h4>Package</h4>
          <p>Is a collection of modules. What a package does, is gather a number of modules holding in general the same functional purpose. Making it easier to include all the related modules at once.</p>
          <h4>Library</h4>
          <p>Well library at it's core, is a collections of packages. It's purpose is to offer a set of functionalities ready to use without worrying about the subsequent packages. So a library is what you include when you want to add some functionality to your code. It does not force any coding style on you either.</p>
          <h4>Framework</h4>
          <p>It's a set of libraries. But this time, the framework does not just offer functionalities, but it also provides an architecture for the development work.</p>
          <center>
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/framework-vs-library.png" alt="" width='50%'/>
          </center>
          </section>
          {/* <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/10/Image-1-2.png" alt="" /> */}



          <section className='section'>
          <h2>History and evolution of React</h2>
          <li>Current version of React.JS is V18.0.0 (April 2022).</li>
          <li>Initial Release to the Public (V0.3.0) was in July 2013.</li>
          <li>React.JS was first used in 2011 for Facebook's Newsfeed feature.</li>
          <li>Facebook Software Engineer, Jordan Walke, created it.</li>
          <li>Current version of create-react-app is v5.0.1 (April 2022).</li>
          <li>create-react-app includes built tools such as webpack, Babel, and ESLint.</li>
          
          <div className="para-image">
          <div className="image">
          <img src="https://www.optimalvirtualemployee.com/wp-content/uploads/2023/02/ReactJS-History.png" alt="" />
          </div>
          <div className="para">
          <p>Facebook faced a challenging task in 2011 when it wanted to build a faster, more responsive, and more dynamic user interface to offer users a richer user experience.</p>
          <p>The React framework was created by one of Facebook’s software engineers to simplify the development process by providing a more organized and structured way to build dynamic and interactive user interfaces.</p>
          <p>Since its release to the open-source community, React quickly gained popularity in JavaScript’s ecosystem due to its revolutionary approach to DOM manipulation and user interfaces.</p>
          </div>
          </div>
          </section>

          
          <section className="section">
          <h2>Why choose React?</h2>
          <div className="para-image">
          <div className="para">
          <p>Today, React dominates all other front-end development frameworks. Here’s why:</p>
            <li>Creating dynamic web applications is easier with React since it requires less coding and provides more functionality than JavaScript, where coding can get very complex very quickly.</li>
            <li><u>Improved performance:</u> React uses Virtual DOM, resulting in faster web applications. A Virtual DOM compares the components’ previous states and updates only the items that have changed, rather than updating all components, as conventional web applications do.</li>
            <li><u>Reusable components:</u> Components are the building blocks of any React application, and a single application typically consists of multiple components. Reusing these components throughout the application dramatically reduces development time since they have logic and controls.</li>
          </div>
          <div className="image">
          <img src="https://teknotrait.com/wp-content/uploads/2016/07/All-about-react-JS.png" alt="" />
          </div>
          </div>

          <div className="para-image">
          <div className="image">
          <img src="https://www.optimalvirtualemployee.com/wp-content/uploads/2023/02/unidirectional-data-flow-1200x675.png" alt="" />
          </div>
           <div className="para">
           <li>A React app is designed with a unidirectional data flow. An application’s data flows in a single direction, so debugging errors and identifying where a problem occurs at any given moment is easier.</li>
            <li>There is a small learning curve with React, as it mainly combines HTML and JavaScript concepts with some beneficial additions.</li>
            <li>It can be used to develop web and mobile apps: We know that React is used for creating web applications, but it has more to offer. A framework called React Native, derived from React itself, is prevalent and is used for building beautiful mobile applications. Therefore, it can be used to create both web and mobile applications.</li>
            <li>Facebook has released a Chrome extension that makes it easier and faster to debug React web applications.</li>
           </div>
          </div>
           
          </section>



           <section className="section">
           <h2>How does React Works?</h2>
           <p>React creates a VIRTUAL DOM in memory.</p>
           <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
           <p>React only changes what needs to be changed. React finds out what changes have been made, and changes only what needs to be changed.</p>
           <p>You will learn the various aspects of how React does this in the rest of the notes.</p>
           </section>


           <section className="section">
           <h2>Advantages of React JS</h2>
           <div className="para-image">
           <div className="para">
           <li>React.js builds a customized virtual DOM. Because the JavaScript virtual DOM is quicker than the conventional DOM, this will enhance the performance of apps.</li>
           <li>It makes a unique UI possible.</li>
           <li>Search engine friendly ReactJS.</li>
           <li>Modules and valid data make larger apps easier to manage by increasing readability.</li>
           <li>React makes the entire scripting environment process simpler.</li>
           <li>React integrates various architectures.</li>
           <li>It makes advanced maintenance easier and boosts output.</li>
           <li>Guarantees quicker rendering</li>
           <li>The availability of a script for developing mobile apps is the best feature of React.</li>
           <li>A large community supports ReactJS.</li>
           </div>
           <div className="image">
           <img src="https://www.icoderzsolutions.com/blog/wp-content/uploads/2024/05/Major-Advantages-of-React-JS.webp" alt="" width='50%' />
           </div>
           </div>
           </section>

          <section className="section">
          <h2>Disadvantages of React JS</h2>
          <div className="para-image">
          <div className="image">
          <img src="https://www.biztechcs.com/wp-content/uploads/2023/04/Disadvantages-of-React-JS.png" alt=""/>
          </div>
          <div className="para">
          <li>Steep learning curve: React’s concepts and abstractions can be challenging to understand, especially for developers new to front-end development.</li>
           <li>Over-reliance on third-party libraries: React is often used with many third-party libraries, making it difficult to understand and debug the codebase.</li>
           <li>Poor server-side rendering performance: React’s server-side rendering performance can be slower than other options, such as Angular, due to its virtual DOM.</li>
           <li>Inconsistent documentation: React’s documentation is extensive, but it can be challenging to find the information you need, and some parts of the documentation may be outdated.</li>
          </div>
          
          </div>
          <li>Large bundle size: React applications can have a large JavaScript bundle size, affecting performance on slower devices or for users with low bandwidth.</li>
           <li>The complexity of state management: React’s simplicity can make it challenging to manage the state of large applications, especially when using its features, such as hooks, in complex ways.</li>
           <p>Despite these limitations, React remains a popular choice for front-end development, and its benefits often outweigh its limitations for many developers and organizations.</p>
          </section>


          <section className="section">
          <h2>React vs. Other frameworks (Angular, Vue)</h2>
           <p>Here is the comparison between three frontend frameworks: React, Angular, and Vue. We’ll delve into their key features, architecture, performance, popularity, and community support to provide you with a comprehensive understanding of these frameworks and help you choose the right one for your project. Whether you’re looking for the best frontend framework for performance, or ease of use, this comparison will guide you in making an informed decision.</p>

           <h4>1. Popularity</h4>
           {/* <ul type='disc'> */}
              <li> React: React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New York Times use React for their front-end development.</li>
              <li>Angular: Angular is used by Google, Upwork, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications. </li>
              <li>Vue: Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular. </li>
            {/* </ul> */}

            <h4>2. Architecture</h4>
            <li>React: React does not follow any specific pattern, developers have the freedom to choose any design pattern. It begins with a single root component. Each can be nested with another component. It can also include third-party components such as state management routing, animation, etc for specific purposes. Here, the components are the large building block that defines reusable items used through the application.</li>
            <li>Angular: Angular follows MVC (Model-View-Controller) architecture, also you don’t have restrictions in following only MVC architecture. Since Angular is also component-based, you can choose any design pattern. The Angular framework contains modules, templates, services, and components in the architecture which follows several operations while implementing an application.  </li>
            <li>Vue: Vue is called a progressive framework where you can extend functionality using third-party packages. It follows the MVVM (Model View ViewModel) pattern but is also not strictly linked to it. It also has SFCs (Single File Components) which can be transpiled into JS code using tools like Webpack. </li>

            <h4>3. Ecosystem</h4>
            <li>React: React has excellent open-source packages that could be used for developing applications. Front-end applications rely on global state management (Redux) used to store information. Also, React has React Native which allows you to build native iOS and Android applications. React uses JavaScript which acts as a powerpack for the whole new application. It combines UI templates and JavaScript logic called JSX which is the scripting language for React. </li>
            <li>Angular: Angular also performs state management, inspired by Redux in React. You can build cross-platform mobile applications using NativeScript. The technology MEAN is based on Angular which is the trendy one these days, used mostly by developers. Angular material fills all the needs of UI and helps developers in building an aesthetic, consistent, and fully functional UI. It uses templates with Angular directives. </li>
            <li>Vue: Vue comes with various libraries used for creating a full-fledged UI. Vuex is the state management library for Vue applications. To speed up your development, it has input components and advanced elements. It has a brilliant feature of integrating with Laravel. It can play a role of a library and a framework both depending on the project’s requirement. It uses HTML-based template syntax.</li>

            <h4>Conclusion</h4>
            <p>React, Angular, or Vue, all of these frameworks are based purely on JavaScript thus, they’re not dependent on any third-party tools. Each framework has unique features that can be used by developers whenever required. So, instead of giving a conclusion on going for one framework, it totally depends on you which framework you want to go for. Use the right framework based on the requirement of the project.</p>
          </section>


         <section className="section">
         <h2>Understanding Single Page Applications (SPA) and Multi-Page Applications (MPA)</h2>
          {/* Singlepage */}
          <h3>What is an Single Page Applications(SPAs)?</h3>
          <p>As the names suggests, it is a single page where all information is available on the same page. It is even known as a type of web application architecture used to manage the components of a web app.</p>
          <p>A single-page application (SPA) is a web application that loads a single HTML page and updates it dynamically with JavaScript. This means that users don't need to wait for the entire page to reload when they click a link or submit a form. </p>
          <div className="para-image">
          
          <div className="para">
          
          <p>A Single-Page Application operates entirely within the web browser, eliminating the need for full-page reloads during use. This approach enables faster transitions, mimicking the fluidity of native mobile apps. SPAs offer responsive and seamless user experiences by leveraging technologies like Angular, React.js, and Vue.js. They're ideal for creating interactive and rapid web applications. </p>
          <p>Examples include Gmail, Google Maps, Paypal, and Airbnb. </p>
          <p>If you seek a fast, responsive, and easy-to-maintain web application, SPAs are an excellent choice. To delve deeper, explore our comprehensive guide on SPAs, covering their workings and advantages, and providing a precise understanding of the concept.</p>
          </div>
          <div className="image">
          <img src="https://media.excellentwebworld.com/wp-content/uploads/2024/05/09121158/template-view-vs-page.webp" alt="" />
          </div>
          </div>
         </section>

          <section className="section">
          <h3>The Pros and Cons of SPAs</h3>
          <h3>Pros:</h3>
          <li><u>Smooth User Experience</u> : SPAs provide seamless navigation without full page reloads, resulting in a more fluid and desktop-like feel for users.</li>
          <li><u>Faster Load Times</u> : Initial loading of the SPA occurs once, and subsequent interactions fetch data via APIs, reducing load times.</li>
          <li><u>Rich Interactivity</u> : SPAs leverage JavaScript frameworks to create dynamic interfaces with real-time updates.</li>
          <li><u>Better for Web Apps</u> : Ideal for web applications that require high interactivity, such as social media platforms, dashboards, and collaboration tools.</li>

          <h3>Cons:</h3>
          <li><u>Initial Load Time</u> : The initial load can be slower due to loading JavaScript frameworks and dependencies.</li>
          <li><u>SEO Challenges</u> : SPAs may face SEO difficulties since search engines traditionally index separate HTML pages.</li>
          <li><u>Complexity</u> : Developing SPAs involves managing client-side routing, state management, and handling asynchronous data fetching.</li>
          <li><u>Back Button Behavior</u> : Handling browser history and the back button can be tricky in SPAs.</li>
          </section>

          {/* Multipage */}
          <section className="section">
          <h3>What is Multi Page Applications(MPA)?</h3>
          <p>A Multi-Page Application, or MPA, is a type of website or web application where each page is separately created and sent to our web browser by a server.</p>
          <div className="para-image">
          <div className="image">
          <img src="https://andrejgajdos.com/wp-content/uploads/2020/04/single-page_application_vs_multiple-page_application.png" alt="" width='50%'/>
          </div>
          <div className="para">
          <p>A multi-page application is a form of web application in which each user action causes a new page to load from the server. MPAs are made up of multiple static pages, each with a specific purpose, such as a homepage, product catalog, contact form, or user profile. These pages typically have unique layouts and functionalities tailored to their specific roles. </p>
          <p>Examples of MPAs include eBay, Amazon, Facebook, and Twitter. </p>
          They offer users a familiar browsing experience akin to navigating through different sections of a traditional website, with each page providing a dedicated interface for various tasks and content.
          </div>
          </div>
          </section>

          <section className="section">
          <h3>The Pros and Cons of MPAs</h3>
          <h3>Pros:</h3>
          <li><u>Modularity</u> : MPAs divide functionality into separate pages, making it easier to manage and maintain code.</li>
          <li><u>SEO-Friendly</u> : Each page can be optimized for certain keywords to increase search engine visibility.</li>
          <li><u>Back Button Behavior</u> : MPAs naturally handle browser history and back button navigation.</li>
          <li><u>Graceful Degradation</u> : If JavaScript fails to load, MPAs still display content.</li>

          <h3>Cons:</h3>
          <li><u>Page Reloads</u> : MPAs require full page reloads when navigating between sections, impacting user experience.</li>
          <li><u>Slower Interactions</u> : Loading new pages can be slower compared to SPAs’ dynamic updates.</li>
          <li><u>Server Load</u> : Each page request hits the server, potentially increasing server load.</li>
          <li><u>Complex Navigation Logic</u>: Managing navigation across multiple pages can be intricate.</li>
          </section>
          

        <section className="section">
        <div className="SvM">
        <h2>Differences between SPA and MPA</h2>
        <table>
        <tr>
            <th >Feature</th>
            <th>Single Page Application (SPA)</th>
            <th>Multi-Page Application (MPA)</th>
        </tr>
        <tr>
            <td>Definition</td>
            <td>Loads a single HTML page and dynamically updates content without refreshing the page.</td>
            <td>Consists of multiple pages where each page loads separately from the server.</td>
        </tr>
        <tr>
            <td>Performance</td>
            <td>Fast user experience as only data is fetched and rendered dynamically.</td>
            <td>Slower due to full page reloads and multiple server requests.</td>
        </tr>
        <tr>
            <td>Development Complexity</td>
            <td>More complex due to heavy reliance on JavaScript frameworks like React, Angular, or Vue.js.</td>
            <td>Simpler to develop using traditional server-side rendering techniques.</td>
        </tr>
        <tr>
            <td>SEO</td>
            <td>Challenging due to dynamic content, requires additional SEO optimizations.</td>
            <td>Better SEO as each page has a unique URL and is easily crawled by search engines.</td>
        </tr>
        <tr>
            <td>Server Load</td>
            <td>Reduced load on the server as most of the processing happens on the client-side.</td>
            <td>Higher server load as each request reloads a new page.</td>
        </tr>
        <tr>
            <td>Navigation</td>
            <td>Smooth transitions using JavaScript without full page reloads.</td>
            <td>Requires full page reloads, leading to a slower navigation experience.</td>
        </tr>
        <tr>
            <td>Use Cases</td>
            <td>Best for dynamic web applications like social media platforms and dashboards.</td>
            <td>Suitable for content-heavy websites like blogs, e-commerce sites, and news portals.</td>
        </tr>
       </table>
        </div>
        </section>


        <section className="section">
          <h2>Lifecycle of SPAs and MPAs</h2>
          <div className="para-image">
            <div className="para">
              <li>A single-page application, as the name suggests, runs on a single web page and does not need multiple page refreshes during user interaction.</li>
              <li>Unlike traditional web applications, SPAs leverage dynamic HTML updates and asynchronous data retrieval techniques to enhance performance and create a desktop-like experience within the browser.</li>
            </div>
            <div className="image">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*TgDJlZWCvSYz7486niWz3w.gif" alt=""/>
            </div>
          </div>
          <p>During development, SPAs often utilize JavaScript frameworks or libraries such as React, Angular, or Vue.js. Due to these tools, developers can build complex and interactive SPAs, including social media platforms, email clients, and project management tools.</p>
        </section>

          
        </div>
        <div className='img-container'>
        {/* <img src="https://icon.icepanel.io/Technology/svg/React.svg" alt="" /> */}
        </div>
      </div>
      
  )
}

export default Introduction