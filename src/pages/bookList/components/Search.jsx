import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const Search = () => {
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(""); // Store selected author

  // Fetch books and authors from API
  const getBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const getAuthors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/authors`);
      if (Array.isArray(response.data)) {
        setAuthors(response.data); // Ensure it's an array before setting state
      } else {
        console.error("Authors data is not an array:", response.data);
        setAuthors([]); // Set to empty array if response is invalid
      }
    } catch (error) {
      console.error("Error fetching authors:", error);
      setAuthors([]); // Handle error by setting an empty array
    }
  };

  useEffect(() => {
    getBooks();
    getAuthors();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter books by title, author, and year
    const results = books.filter((book) => {
      const matchesTitle = title ? book.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesAuthor = selectedAuthor ? book.author === selectedAuthor : true; // Check selected author
      const matchesYear = publishedYear ? book.publishedYear === publishedYear : true;

      return matchesTitle && matchesAuthor && matchesYear;
    });

    if (results.length === 0) {
      alert(`Book Not Found: ${title}, ${publishedYear}`);
    } else {
      setFilteredBooks(results);
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="-mt-28 border box-border p-10 w-full max-w-screen-md shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-white">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-9">
          What are you looking for in the library?
        </h2>

        {/* Filter Box Form */}
        <form onSubmit={handleSearch} className="grid gap-4 grid-cols-1 md:grid-cols-4">
          {/* Search by title */}
          <div className="col-span-1">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Search by title..."
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
            />
          </div>

          {/* Search by Author */}
          <div className="col-span-1">
            <select
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
              onChange={(e) => setSelectedAuthor(e.target.value)} // Set selected author
              value={selectedAuthor} // Bind to state
            >
              <option value="">Select Author</option>
              {authors.map((author) => (
                <option key={author._id} value={author._id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search by Published Year */}
          <div className="col-span-1">
            <input
              type="text"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
              placeholder="Year"
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
            />
          </div>

          {/* Search Button */}
          <div className="col-span-1">
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* Display search results */}
        <div className="mt-6">
          {filteredBooks.length > 0 ? (
            <ul>
              {filteredBooks.map((book) => (
                <li key={book._id}>
                  {book.title} by {authors.find((author) => author._id === book.author)?.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
