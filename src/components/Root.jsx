import React, { Fragment } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import SignUp from './SignUp'

import Introduction from './topics/basics/Introduction'
import Comp from './topics/basics/Comp'
import ConditionalRendering from './topics/basics/ConditionalRendering'
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

const Root = () => {
  const routes = createBrowserRouter([ 
    {
        path: "/",
        element: <Dashboard/>,
        children: [
          {
            path: "/login",
            element: <Login/>
          },
          {
            path: "/signup",
            element: <SignUp/>
          },{
            path: "/introduction",
            element: <Introduction/>,
            children: [
              {
                path: "/introduction/component",
                element: <Comp/>
              },
              {
                path: "/introduction/conditional",
                element: <ConditionalRendering/>
              },{
                path: "/introduction/features",
                element: <Features/>
              },
              {
                path: "/introduction/gettingstarted",
                element: <GettingStarted/>
              },
              {
                path: "/introduction/jsx",
                element: <JsxComp/>
              }
            ]
          },
          {
            path: "/formhandling",
            element: <Formhandling/>
          },
          {
            path : "/fragments",
            element: <Fragments/>
          },
          {
            path : "/props",
            element: <Props/>
          },
          {
            path : "/hooks",
            element: <Hooks/>,
            children: [
              {
                path: "/hooks/usestate",
                element: <Usestate/>
              },
              {
                path: "/hooks/forwardref",
                element: <Forwardref/>
              },{
                path: "/hooks/usecallback",
                element: <Usecallback/>
              },{
                path: "/hooks/usecontext",
                element: <Usecontext/>
              },{
                path: "/hooks/useeffect",
                element: <Useeffect/>
              },{
                path: "/hooks/usememo",
                element: <Usememo/>
              },{
                path: "/hooks/usenavigate",
                element: <Usenavigate/>
              },{
                path: "/hooks/usereducer",
                element: <Usereducer/>
              },{
                path: "/hooks/useref",
                element: <Useref/>
              }
            ]
          }
                  
        ]
      }
])
  return <RouterProvider router={routes}/>
}

export default Root