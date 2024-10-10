import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";

const Fav = () => {
    const [books, setBooks] = useState([
        { id: 1, title: '1984', author: 'George Orwell' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    ]);

    const handleDelete = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

  return (
   <div>
    <Navbar />
     <div className="fav p-4">
    <h1 className="text-2xl font-bold mb-4">Favorite</h1>
    <Link to="" className="mb-4 inline-block bg-green-500 text-white py-2 px-4 rounded">
        Add New Book
    </Link>
    <ul className="space-y-4">
        {books.map(book => (
            <li key={book.id} className="border p-4 rounded shadow flex justify-between items-center">
                <Link to={`/books/${book.id}`}>
                    <h2 className="text-xl">{book.title}</h2>
                    <p>{book.author}</p>
                </Link>
                <button 
                    onClick={() => handleDelete(book.id)} 
                    className="bg-red-500 text-white py-1 px-2 rounded">
                    Delete
                </button>
            </li>
        ))}
    </ul>
</div>
<Footer />
   </div>
  )
}

export default Fav;