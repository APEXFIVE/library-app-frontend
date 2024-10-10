import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Release from "../../components/Release";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Authors from "../../components/Authors";

const BookList = () => {
    return (
        <div>
            <div> <Navbar /></div>

            <div>   <Hero /></div>

            <div> <Search /></div>
            <div><Release /></div>
            <div><Authors /></div>
            <div><Footer /></div>
        </div>
    );
};

export default BookList;
