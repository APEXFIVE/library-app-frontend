import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from "../../constants";



const BookDetails = () => {
    const params = useParams()
    console.log(params)
    const bookId = params.Id
    const [bookDetail, setBookDetail] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const response = await axios.get(`${BASE_URL}/books/${bookId}`);
            setBookDetail(response.data)
            console.log(bookDetail)
        };
        getBooks();

    }, [])
    //   const books = [
    //       { id: 1, title: '1984', author: 'George Orwell' },
    //       { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    //       { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    //   ];
    const book = books.find(b => b.id === parseInt(id));


    return <div >
        <Navbar />
        <div>
            <div className="border p-4 hover:shadow-lg transition-shadow duration-300"> <img src={book.cover} alt="" /></div>
            <div className="border p-4 hover:shadow-lg transition-shadow duration-300 bg-orange-300">
                <h1 className="font-bold text-2xl text-center ">{book.title}</h1>
                <h1 className=" text-2xl text-center mt-4" >{book.summary}</h1>
                <h1 className=" text-2xl text-center mt-4">{book?.author?.name}</h1>
                <h1 className=" text-2xl text-center mt-4 font-bold">{book.publishedYear}</h1>
                <h1 className=" text-2xl text-center mt-4">{book.genre}</h1>
            </div>
        </div>


        <Footer />
    </div>;

};

export default BookDetails;