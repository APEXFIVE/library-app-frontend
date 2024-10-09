import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";



const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: 'fiction',
        publishedYear: '',
        summary: '',
        coverImage: null,
      });
    
      // const handleChange = (e) => {
      //   const { name, value } = e.target;
      //   setFormData({ ...formData, [name]: value });
      // };
    
      // const handleFileChange = (e) => {
      //   setFormData({ ...formData, coverImage: e.target.files[0] });
      // };
    
      const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        //collect a form data
        const formData = new FormData(e.target);
        //post data to API
        const response = await axios.post (`${BASE_URL}/books`,{
          title: formData.get ('title'),
          author: formData.get ('author'),
          publishedYear: formData.get ('publishedYear'),
          summary: formData.get ('description'),
          coverImage: formData.get ('coverImage'),
          
        }
        )
      } catch (error) {
        console.log(error)
      }
      // const handleSubmit = (e) => {
      //   onAddBook(formData);
      //   setFormData({
      //     title: '',
      //     author: '',
      //     genre: 'fiction',
      //     isbn: '',
      //     description: '',
      //     coverImage: null,
      //   });
    };

    return (
        <div>
            <Navbar />

        <form onSubmit={handleSubmit} className=" img w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded-md ">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          // value={formData.title}
          // onChange={handleChange}
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
          // value={formData.author}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Genre</label>
        <select
          id="genre"
          name="genre"
          // value={formData.genre}
          // onChange={handleChange}
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
        <label htmlFor="publishedYear" className="block text-gray-700 font-bold mb-2">Published Year</label>
        <input
          type="text"
          id="publishedYear"
          name="publishedYear"
          // value={formData.isbn}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">Summary</label>
        <textarea
          id="summary"
          name="summary"
          // value={formData.description}
          // onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="coverImage" className="block text-gray-700 font-bold mb-2">Cover Image</label>
        <input
          type="file"
          id="coverImage"
          name="coverImage"
          // onChange={handleFileChange}
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