

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import Login from './pages/form/login'
import Reg from './pages/form/reg'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<BookList />
    },
   {
    path: "/add-new",
    element: <AddBook />
   },
   {
    path: "/books/:id",
    element: <BookDetails />
   },
   {
    path: "/form",
    element: <Login />
   },
   {
    path: "/register",
    element: <Reg />
   }
  ]);
 

  return <RouterProvider router={router} />
  
}

export default App
