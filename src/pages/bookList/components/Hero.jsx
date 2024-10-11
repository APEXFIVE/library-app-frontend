import React from "react";
import Slider from "react-slick";
import slider from "react-slick/lib/slider";


const Hero = () => {
    const settings = {
        dots: false,            // Show navigation dots below the slider
        infinite: true,        // Enable infinite scrolling
        speed: 500,            // Transition speed (500ms)
        slidesToShow: 1,       // Show 1 full slide at a time
        slidesToScroll: 1,     // Scroll 1 slide at a time
        autoplay: true,        // Automatically slide the content
        autoplaySpeed: 3000,   // 3 seconds between auto slides
    };
    return (
        <section className="hero">
            <div className="overlay">
                {/* <Slider {...settings}> */}
                    {/* Slide 1 */}
                    <div className="flex justify-center items-center flex-col">
                        <h3 className="text-center pt-48 text-3xl w-3/4 ml-8">
                            Online Learning Anytime, Anywhere!
                        </h3>
                       <marquee behavior="" direction=""><h1 className="text-center text-6xl text-[#ff7236] font-semibold w-3/4 mt-3 ml-10">
                            Discover Your Roots
                        </h1></marquee> 
                        <p className="text-center text-2xl w-3/4 mt-3 mb-5 ml-8">
                        There is more treasure in books than in all the pirate's loot on Treasure Island.
                        </p>
                    </div>

                    {/* Slide 2 */}
                    {/* <div className="flex justify-center items-center flex-col ml-32">
                        <h3 className="text-center pt-48 text-3xl w-3/4">
                            Learn at Your Own Pace
                        </h3>
                        <h1 className="text-center text-6xl text-[#ff7236] font-semibold w-3/4 mt-3 ml-28">
                            Embrace the Future of Education
                        </h1>
                        <p className="text-center text-2xl w-3/4 mt-3 mb-5 ml-32">
                            Our platform offers a variety of courses to help you achieve your goals, wherever you are.
                        </p>
                    </div> */}

                    {/* Slide 3 */}
                    {/* <div className="flex justify-center items-center flex-col ml-32">
                        <h3 className="text-center pt-48 text-3xl w-3/4 ml-32">
                            Gain Knowledge & Skills
                        </h3>
                        <h1 className="text-center text-6xl text-[#ff7236] font-semibold w-3/4 mt-3 ml-32">
                            Explore Limitless Learning
                        </h1>
                        <p className="text-center text-2xl w-3/4 mt-3 mb-5 ml-32">
                            Our lessons are designed for both beginners and experts, providing a learning path for everyone. 
                        </p>
                    </div> */}
                {/* </Slider> */}
                <button className="hero-b ">READ MORE</button> <button className="hero-c">BORROW</button>
            </div>
        </section >
    )
};

export default Hero;
