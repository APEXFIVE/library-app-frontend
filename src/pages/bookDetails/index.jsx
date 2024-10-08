import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from 'react';
import { useParams, Link } from 'react-router-dom';



const BookDetails = () => {
  const { id } = useParams();
  const books = [
      { id: 1, title: '1984', author: 'George Orwell' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];
  const book = books.find(b => b.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  return (
     <div>
        <Navbar />
        <div className="p-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="mb-4">{book.author}</p>
            <Link to={`/books/edit/${book.id}`} className="bg-blue-500 text-white py-2 px-4 rounded">
                Edit
            </Link>
            <Link to="/" className="ml-4 bg-gray-500 text-white py-2 px-4 rounded">
                Back to List
            </Link>
        </div>
        <Footer />
     </div>
  )
}

export default BookDetails;