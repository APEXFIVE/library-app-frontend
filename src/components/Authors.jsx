import pic from "../assets/images/team1.jpg";
import img from "../assets/images/team2.jpg";
import image from "../assets/images/team3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const Authors = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Meet the Authors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 box-border shadow-white">
        
        <div className="border p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={pic}
            alt="Author 1"
            className="w-full h-auto rounded-md mb-2"
          />
        </div>

        <div className="border p-4 bg-white hover:bg-orange-700 hover:text-white transition-all duration-300">
          <h1 className="text-black hover:text-white text-center font-bold text-4xl">
          David J. Seleb
          </h1>
          <div className="font-bold text-4xl text-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="mt-20 text-black hover:text-white text-2xl">
            Deputy Director The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here...
          </p>
        </div>

       
        <div className="border p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={img}
            alt="Author 2"
            className="w-full h-auto rounded-md mb-2"
          />
        </div>

        
        <div className="border p-4 bg-white hover:bg-orange-700 hover:text-white transition-all duration-300">
          <h1 className="text-black hover:text-white text-center font-bold text-4xl">
            Robert Simmons
          </h1>
          <div className="font-bold text-4xl text-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="mt-20 text-black hover:text-white text-2xl">
            Deputy Director The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here...
          </p>
        </div>

        
        <div className="border p-4 hover:shadow-lg transition-shadow duration-300">
          <img
            src={image}
            alt="Author 3"
            className="w-full h-auto rounded-md mb-2"
          />
        </div>

        
        <div className="border p-4 bg-white hover:bg-orange-700 hover:text-white transition-all duration-300">
          <h1 className="text-black hover:text-white text-center font-bold text-4xl">
          Anna Delpan
          </h1>
          <div className="font-bold text-4xl text-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="mt-20  text-black hover:text-white text-2xl">
            Deputy Director The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authors;
