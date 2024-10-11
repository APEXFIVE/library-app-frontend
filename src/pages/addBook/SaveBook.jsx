
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";


const SaveBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const response = await axios.get(`${BASE_URL}/books`);
            setBooks(response.data)
        };
        getBooks();
    }, []);



    return <div >
        <Navbar />

        <h1 className="font-bold text-4xl text-center mt-5 mb-5">BOOK LIST</h1>

        <div className="books ">

            {books.map((book) => (

                <div >
                    <div className="border p-4 hover:shadow-lg transition-shadow duration-300">
                        <Link to={`/books/${book._id}`} >
                        <img src={book.cover} alt="" />
                        </Link>
                    </div>
                    <div className="border p-4 hover:shadow-lg transition-shadow duration-300 bg-orange-300">
                        <h1 className="font-bold text-2xl text-center ">{book.title}</h1>
                        <h1 className=" text-2xl text-center mt-4" >{book.summary}</h1>
                        <h1 className=" text-2xl text-center mt-4">{book?.author?.name}</h1>
                        <h1 className=" text-2xl text-center mt-4 font-bold">{book.publishedYear}</h1>
                        <h1 className=" text-2xl text-center mt-4">{book.genre}</h1>
                    </div>
                </div>



            ))}
        </div>
        <Footer />
    </div>;

}

export default SaveBook;