import React, { useState } from "react";

const BookFilterBox = () => {
  const [keyword, setKeyword] = useState("");
  const [catalogue, setCatalogue] = useState("all");
  const [category, setCategory] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here (e.g., send search data to an API or filter books)
    console.log("Searching for:", { keyword, catalogue, category });
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
          {/* Search by Keyword */}
          <div className="col-span-1">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search by keyword..."
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
            />
          </div>

          {/* Search the Catalogue Dropdown */}
          <div className="col-span-1">
            <select
              value={catalogue}
              onChange={(e) => setCatalogue(e.target.value)}
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
            >
              <option value="all"> Catalogues</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="academic">Academic</option>
             
            </select>
          </div>

          {/* Filter by Category Dropdown */}
          <div className="col-span-1">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-400 focus:outline-none focus:border-orange-600"
            >
              <option value="all"> Categories</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="science-fiction">Science Fiction</option>
              <option value="fantasy">Fantasy</option>
            
            </select>
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
      </div>
    </div>
  );
};

export default BookFilterBox;
