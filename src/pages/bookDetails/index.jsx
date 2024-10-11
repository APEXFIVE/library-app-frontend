import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from "../../constants";



const BookDetails = () => {
    const params = useParams()
    console.log(params)
    const bookId = params.id
    const [bookDetail, setBookDetail] = useState({});

    const getBooks = async () => {
        const response = await axios.get(`${BASE_URL}/books/${bookId}`);
        setBookDetail(response.data)
        console.log(bookDetail)
    };

    useEffect(() => {
        getBooks();
    }, [])


    return (
        <div >
            <Navbar />
            <div className="single-book">
                <div className="border p-4 hover:shadow-lg transition-shadow duration-300  items-center">
                    <img src={bookDetail.cover} alt="" className="h-96 w-64 mx-[500px]"/>
                    <div className="border p-4 hover:shadow-lg transition-shadow duration-300 bg-orange-300 w-64 mx-[500px] mt-6">
                        <h1 className="font-bold text-2xl text-center ">{bookDetail.title}</h1>
                        <h1 className=" text-2xl text-center mt-4" >{bookDetail.summary}</h1>
                        <h1 className=" text-2xl text-center mt-4">{bookDetail?.author?.name}</h1>
                        <h1 className=" text-2xl text-center mt-4 font-bold">{bookDetail.publishedYear}</h1>
                        <h1 className=" text-2xl text-center mt-4">{bookDetail.genre}</h1>
                    </div>
                    <button className="hero-b mt-4 font-bold text-xl w ">DELETE</button>
                    <Link to='/edit'><button className="hero-c mt-4 font-bold text-xl">EDIT</button></Link> 
                </div>


                <Footer />
            </div>
        </div>
    )
};

export default BookDetails;