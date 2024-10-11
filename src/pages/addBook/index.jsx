import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";



const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publishedYear: '',
    summary: '',
    coverImage: '',
  });


  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data)
  }

  useEffect(() => {
    getAuthors();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //collect a form data
      const formData = new FormData(e.target);
      //post data to API
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        author: formData.get('author'),
        publishedYear: formData.get('publishedYear'),
        summary: formData.get('summary'),
        genre: formData.get('genre'),
        cover: formData.get('cover'),

      }
      )
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <div> <Navbar /></div>
      <div className="img">
        <div>
          <section>
            <div className=" max-w-md w-full items-center  mx-auto p-4 bg-white shadow-md rounded-md backdrop-sepia-0 bg-white/30  ">
              <form onSubmit={handleSubmit} className=" w-96">
                <div className="mb-4 ">
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
                  <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">Genre</label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    // value={formData.author}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  // required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
                  <select
                    id="author"
                    name="author"
                    // value={formData.genre}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    {authors.map((author) => {
                      return <option key={author._id} value={author._id}>{author.name}</option>
                    })}
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
                  <label htmlFor="cover" className="block text-gray-700 font-bold mb-2">Cover Image</label>
                  <input
                    type="text"
                    id="cover"
                    name="cover"
                    // onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff7236] text-white font-bold py-2 px-4 rounded hover:bg-[#ff0000]"
                >Add Book</button>
<Link to='/book-list'> Book List</Link> 
              </form>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
};

export default AddBook;