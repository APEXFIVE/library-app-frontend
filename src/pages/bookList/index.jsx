import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Release from "../../components/Release";
import Hero from "./components/Hero";
import Search from "./components/Search"

const BookList = () => {
    return (
        <div>
            <Navbar />
            <Hero />
           <Search/>
           <Release />
            <Footer />
        </div>

    )
};

export default BookList;