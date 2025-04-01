import React from 'react';
import image from '../../assets/Frame 6 (2).jpg'
import image1 from '../../assets/Frame 6 (14).jpg'
import { FaFacebook,FaInstagram, FaTwitter, } from "react-icons/fa";
import backgroundImage from '../../assets/facade-min-1536x1155.webp';

function Hero() {
  return (
    <div>
      
      <div className="p-6 bg-gray-50 dark:bg-gray-900  flex gap-2 bg-center bg-no-repeat bg-cover"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="max-w-4xl mx-auto dark:bg-gray-800 p-6 rounded- shado borde">
          <h1 className='text-center text-3xl font-bold animate-bounce'> About Us</h1>
          <p className="text-neutral-900 dark:text-gray-300 mt-4 border-b-2 leading-8 text-xl font-bold">Welcome to <span className='text-red-300'>Airbnb</span> a thriving and vibrant community designed for modern living. Nestled in a prime location, our estate offers a perfect blend of comfort, security, and convenience, making it an ideal place to call home. <br /> At <span className='text-red-300'>Airbnb</span> we take pride in creating a peaceful and well-planned environment where families, professionals, and retirees can enjoy a high quality of life. Our estate features beautifully designed homes, green spaces, recreational facilities, and essential amenities, ensuring that residents have everything they need within reach </p>

          <p className=" dark:text-gray-300 mt-4 border-b-2 leading-8 text-xl font-bold text-neutral-900">
          We are committed to fostering a strong sense of community by providing safe, well-maintained surroundings and organizing activities that bring neighbors together. Our dedicated management team works tirelessly to ensure that the estate remains a desirable and harmonious place to live.
          </p>
       <div className="flex space-x-8 mx-4 my-4">
         <div className="space-y-4 text-white my-6 text-xl font-bold pr-8 border-r-2 border-gray-300">
           <h1>Contact: 09115429912</h1>
           <h1>Email: chrisphilip95@gmail.com</h1>
           <h1>Address: 1234, London, UK</h1>
         </div>
       
         <div className="space-y-4 ml-20 my-6">
           <h1>
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <FaFacebook className="w-6 h-6" />
             </a>
           </h1>
           <h1>
             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <FaInstagram className="w-6 h-6" />
             </a>
           </h1>
           <h1>
             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
               <FaTwitter className="w-6 h-6" />
             </a>
           </h1>
         </div>
       </div>
             </div>
        </div>
      </div>
    
  )
}

export default Hero




