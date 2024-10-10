import image from '../assets/images/bk1.jpg'
import image1 from '../assets/images/bk2.jpg'
import image2 from '../assets/images/bk3.jpg'
import image3 from '../assets/images/bk4.jpg'
import image4 from '../assets/images/bk5.jpg'
import image5 from '../assets/images/bk6.jpg'
import image6 from '../assets/images/bk7.jpg'
import image7 from '../assets/images/bk8.jpg'
const Release = () => {
    return (
        <section className='release-section'>
            <div className='overlay'>
                <div className='text-center pt-9 text-white'>
                    <h1 className='text-4xl font-bold'>Check Out The New Releases</h1>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested</p>
                </div>

                <div className='flex space-x-4 text-center p-4 justify-center pt-10'>
                    <button
                        className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>
                        ALL RELEASES
                    </button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>ADULTS</button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>KIDS & TEENS</button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>VIDEO</button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>AUDIO</button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>BOOKS</button>
                    <button className='w-[140px] p-2 bg-[#3e3e3e] text-white hover:bg-[#ea580c] focus:outline-none'>MAGAZINES</button>
                </div>

                <div className='real-img mb-6'>
                    <img src={image} alt="image" />
                    <img src={image1} alt="image" />
                    <img src={image2} alt="image" />
                    <img src={image3} alt="image" />
                    <img src={image4} alt="image" />
                    <img src={image5} alt="image" />
                    <img src={image6} alt="image " />
                    <img src={image7} alt="image" />
                    <button className= 'w-[140px] p-2 bg-[#ea580c] text-white hover:bg-[#3e3e3e] focus:outline-none flex items-center'>VIEW MORE</button>
                </div>
              

                </div>

        </section>


    )
}

export default Release;