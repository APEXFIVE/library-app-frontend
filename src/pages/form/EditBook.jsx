import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


const EditBook = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('1984'); // Default value for demonstration
    const [author, setAuthor] = useState('George Orwell'); // Default value for demonstration
    const [publishedYear, setPublishedYear] = useState('1842'); // Default value for demonstration
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Book updated: ${title} by ${author} ${publishedYear}`);
        navigate(`/books/${id}`);
    };

  return (
    <div>
        <Navbar />
        <div className='edit'>
        <form onSubmit={handleSubmit} className="p-4 pt-24 pb-24 w-6/12 mx-80 shadow-transparent backdrop-sepia-0 bg-white/30">
            <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mb-2 w-full"
                required
            />
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishedYear">Published Year</label>
              <input
                type="text"
                placeholder="Published Year"
                value={publishedYear}
                onChange={(e) => setPublishedYear(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            
            <button type="submit" className="bg-[#ff7236] text-white py-2 px-4 rounded">Update Book</button>
        </form>
        </div>
        <Footer />
    </div>
  )
}

export default EditBook;
