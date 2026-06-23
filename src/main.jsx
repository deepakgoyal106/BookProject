import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from './components/Error.jsx';
import HomePage from './components/HomePage.jsx';
import BrowseBooks from './components/browseBooks.jsx';
import AddBooks from './components/addBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import {Provider} from "react-redux";
import {store} from "./utils/store.js";



//routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "browse",
        element: <BrowseBooks />
      },
      {
        path: "browse/:cat",
        element: <BrowseBooks />
      },
      {
        path:"details/:id",
        element:<BookDetails/>
      },
      {
        path: "add",
        element: <AddBooks />
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={appRouter}/>
  </Provider>,
)
