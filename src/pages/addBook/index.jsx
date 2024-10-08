import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: 'fiction',
        isbn: '',
        description: '',
        coverImage: null,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, coverImage: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onAddBook(formData);
        setFormData({
          title: '',
          author: '',
          genre: 'fiction',
          isbn: '',
          description: '',
          coverImage: null,
        });
    };

    return (
        <div>
            <Navbar />
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-md ">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Genre</label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="non-fiction">Academic</option>
          <option value="non-fiction">Mystery</option>
          <option value="non-fiction">Romance</option>
          <option value="non-fiction">Fantasy</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="isbn" className="block text-gray-700 font-bold mb-2">ISBN</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="coverImage" className="block text-gray-700 font-bold mb-2">Cover Image</label>
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#ff7236] text-white font-bold py-2 px-4 rounded hover:bg-[#ff0000]"
      >
        <Link to='/fav'> Add Book</Link>
      </button>
    </form>
    <Footer />
    </div>
    )
};

export default AddBook;