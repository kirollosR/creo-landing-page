import React from "react";

const StudioCard = ({ image1, image2, button, description }) => {
  return (
    <div className="container mx-auto px-4 z-10">
      <div className="card flex flex-col md:grid md:grid-cols-2 gap-10 items-center md:px-1">
        {/* Image 2 will appear first on mobile */}
        <div className="order-1 md:order-2 w-5/6 md:w-full flex justify-center ">
          <img
            src={image2}
            className="w-auto max-w-[320px] h-full"
            alt="Studio"
          />
        </div>

        {/* Content Section */}
        <div className="order-2 md:order-1 w-5/6 md:w-full">
          <div className="flex flex-col items-start md:items-start">
            <img
              src={image1}
              alt="Podcast Studio"
              className="w-5/6 md:w-full max-w-[256px] mb-8"
            />
            <p className="text-white mb-8 text-xs md:text-sm text-start">
              {description}
            </p>
            <a
              href="https://creocreatorclub.simplybook.me/v2/"
              className="inline-block"
            >
              <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                BOOK YOUR {button} NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
