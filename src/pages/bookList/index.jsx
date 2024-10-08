import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";

const BookList = () => {
  return (
    <div>
     <div> <Navbar /></div>

     <div> <Hero /></div>

     <div> <Search /></div>

     <div><Footer /></div>
    </div>
  );
};

export default BookList;
