import React from 'react';

import podcastStudio from "../assets/studios/podcast-studio.svg";
import ps from "../assets/studios/ps.png";

const Card = () => {
    return (
      <div className="max-w-md mx-auto bg-primeColor text-white font-poppins overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          {/* Left Section */}
          <div className="p-8 md:flex-1 md:flex md:flex-col md:justify-center md:items-start">
            {/* Logo */}
            <div className="flex justify-center md:justify-start md:w-3/4 md:pb-5">
              <img
                className=""
                src={podcastStudio}
                alt="Logo"
              />
            </div>
  
            {/* Paragraph */}
            <p className="mt-4 text-center md:text-left md:text-xs md:pb-5">
            A COMFORTABLE SPACE FOR HOSTING, RECORDING
              <br />
              AND PRODUCING PROFESSIONAL <b>AUDIO CONTENT</b>,<br />
              EQUIPPED <b>WITH MICROPHONES AND RECORDER</b>.
            </p>
  
            {/* Button */}
            <div className="mt-4 flex justify-center md:justify-start">
              
              <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40 md:text-sm">
                BOOK YOUR STUDIO NOW
              </button>
            </div>
          </div>
  
          {/* Right Section - Image */}
          <div className="md:w-1/2 p-4 flex justify-center items-center">
            <img
              className="w-full h-auto object-cover"
              src={ps}
              alt="Sample Image"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;