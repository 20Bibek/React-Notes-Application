import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'

import Introduction from './topics/basics/Introduction'
import Comp from './topics/basics/Comp'
import ConditionalRendering from './topics/ConditionalRendering/ConditionalRendering'
import Features from './topics/basics/Features'
import GettingStarted from './topics/basics/GettingStarted'
import JsxComp from './topics/basics/JsxComp'

import Hooks from './topics/hooks/Hooks'
import Usestate from './topics/hooks/Usestate'
import Forwardref from './topics/hooks/Forwardref'
import Usecallback from './topics/hooks/Usecallback'
import Usecontext from './topics/hooks/Usecontext'
import Useeffect from './topics/hooks/Useeffect'
import Usememo from './topics/hooks/Usememo'
import Usenavigate from './topics/hooks/Usenavigate'
import Usereducer from './topics/hooks/Usereducer'
import Useref from './topics/hooks/Useref'

import Formhandling from './topics/form/Formhandling'
import Fragments from './topics/fragment/Fragment'
import Props from './topics/props/Props'

import Advanceconcept from './topics/advanceconcept/Advanceconcept'
import Axios from './topics/advanceconcept/Axios'
import Hoc from './topics/advanceconcept/Hoc'
import PrivateRouting from './topics/advanceconcept/PrivateRouting'
import Reactmemo from './topics/advanceconcept/Reactmemo'
import FirstPage from './FirstPage'
import Home from './Home'

import Routing from './topics/router/Router'
import ContactForm from './Contact'
import About from './About'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "", element: <FirstPage /> },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Introduction />,
            
          },
          { path: "component", element: <Comp /> },
          { path: "conditional", element: <ConditionalRendering /> },
          { path: "features", element: <Features /> },
          { path: "gettingstarted", element: <GettingStarted /> },
          { path: "jsx", element: <JsxComp /> },
          { path: "formhandling", element: <Formhandling /> },
          { path: "fragments", element: <Fragments /> },
          { path: "props", element: <Props /> },
          {
            path: "hooks",
            element: <Hooks />,
          },
          { path: "usestate", element: <Usestate /> },
              { path: "forwardref", element: <Forwardref /> },
              { path: "usecallback", element: <Usecallback /> },
              { path: "usecontext", element: <Usecontext /> },
              { path: "useeffect", element: <Useeffect /> },
              { path: "usememo", element: <Usememo /> },
              { path: "usenavigate", element: <Usenavigate /> },
              { path: "usereducer", element: <Usereducer /> },
              { path: "useref", element: <Useref /> },
          {
            path: "advanceconcept",
            element: <Advanceconcept />,
           
          },
          { path: "axios", element: <Axios /> },
          { path: "hoc", element: <Hoc /> },
          { path: "privaterouting", element: <PrivateRouting /> },
          { path: "reactmemo", element: <Reactmemo /> },
          {
            path: "routing",
            element: <Routing/>

          }
        ]
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      {
        path : "contact",element: <ContactForm/>,
      },
      {
        path: "about",
        element : <About/>
      }
    ]
  }
])

const Root = () => {
  return <RouterProvider router={routes} />
}

export default Root
