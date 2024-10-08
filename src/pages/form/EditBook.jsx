import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


const EditBook = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('1984'); // Default value for demonstration
    const [author, setAuthor] = useState('George Orwell'); // Default value for demonstration
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Book updated: ${title} by ${author}`);
        navigate(`/books/${id}`);
    };

  return (
    <div>
        <Navbar />
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mb-2 w-full"
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Update Book</button>
        </form>
        <Footer />
    </div>
  )
}

export default EditBook;
