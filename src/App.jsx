
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import Login from './pages/form/Login'
import Reg from './pages/form/Reg'
import EditBook from './pages/form/EditBook'
import Fav from './pages/form/Fav'
import SaveBook from './pages/addBook/SaveBook'


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
   },
   {
    path: "/edit",
    element: <EditBook />
   },
   {
    path: "/fav",
    element: <Fav />
   },
   {
    path: "/book-list",
    element: <SaveBook />
   }
  ]);
 

  return <RouterProvider router={router} />
  
}

export default App
