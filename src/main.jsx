import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BrowseBooks from './components/browseBooks.jsx';
import AddBooks from './components/addBooks.jsx';
import Error from './components/Error.jsx';



//routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />
  },
  {
    path: "/browse",
    element: <BrowseBooks/>
  },
  {
    path: "/add",
    element: <AddBooks />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
