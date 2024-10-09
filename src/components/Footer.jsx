import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons/faPhoneFlip";
import { faEnvelope, faO } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className=" ml-8 text-lg font-bold relative inline-block pb-2">
            About Apex5 Libraries
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </h3>
          <p className="mt-8 ml-8">
          Apex5 Libraries is a modern, user-friendly library that offers a vast collection of books across various genres. 
          </p>

          <p className="mt-14">
          Hohoe Holy Rosary Street
          </p>
          <p> <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-orange-600"
              /> <a href="mailto:support@libraria.com" className="text-orange-400">support@libraria.com</a></p>
          <p> <FontAwesomeIcon
                icon={faPhoneFlip}
                className="mr-2 text-orange-600"
              /> (+233) 5451-04263</p>
        </div>

        <div>
          <h3 className="ml-8 text-lg font-bold relative inline-block pb-2">
            Quick Links
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </h3>
          <ul className="mt-8 space-y-2 ml-8">
            <li><a href="#" className="hover:underline">Library News</a></li>
            <li><a href="#" className="hover:underline">History</a></li>
            <li><a href="#" className="hover:underline">Meet Our Staff</a></li>
            <li><a href="#" className="hover:underline">Board of Trustees</a></li>
            <li><a href="#" className="hover:underline">Budget</a></li>
            <li><a href="#" className="hover:underline">Annual Report</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className=" p-7 text-lg font-bold relative inline-block pb-2">
            Timing
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </h3>
          <ul className="mt-8 space-y-1">
            <li>Mon - Thu: 9 am - 9 pm</li>
            <li>Fri: 9 am - 6 pm</li>
            <li>Sat: 9 am - 5 pm</li>
            <li>Sun: 1 pm - 6 pm</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold relative inline-block pb-2">
           Latest Tweets
            <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-500"></span>
          </h3>
          <p className="mt-8">@TemplateLibraria Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <p>@TemplateLibraria Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <p>© 2024 APEX5 LIBRARIES. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Books & Media</a>
            <a href="#" className="hover:underline">News & Events</a>
            <a href="#" className="hover:underline">Kids & Teens</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Research</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
