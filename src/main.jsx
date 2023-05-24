


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";





import Blog from './assets/Blog/Blog.jsx';
import Statistics from './assets/Statistics/Statistics.jsx';
import AppliedJobs from './assets/AppliesJobs/AppliedJobs.jsx';

import Main from './assets/Components/Layout/Main';
import Header from './assets/Components/Header/Header.jsx';
import NotFound from './assets/Components/NotFoundPage/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  
    children :[
      {
       path: "/",
       element:<Header></Header>
       
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
      {
        path: "/appliedJob",
        element:<AppliedJobs></AppliedJobs>,
      },
      {  
        path:"*",
      element:<NotFound></NotFound>,
      }
    
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
