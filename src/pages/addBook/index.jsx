import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add the book to the list
        alert(`Book added: ${title} by ${author}`);
        navigate('/');
    };
    return (
        <div>
            <Navbar />
        <form onSubmit={handleSubmit} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
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
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Add Book</button>
    </form>
    <Footer />
    </div>
    )
};

export default AddBook;