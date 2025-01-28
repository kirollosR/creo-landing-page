import React from "react";

const StudioCard = ({ image1, image2, button, description }) => {
  return (
    <div>
      <div className="card grid grid-cols-1 md:grid-cols-2">
        {/* Image and Paragraph Section */}
        <div className="card rounded-box flex-grow ml-10">
          <div className="flex flex-col">
            {" "}
            {/* Stack image and paragraph vertically */}
            <img
              src={image1}
              alt="Podcast Studio"
              className="mb-8 w-64"
            />
            <p className="text-white mb-8 text-sm">{description}</p>
            <a
              href="https://creocreatorclub.simplybook.me/v2/" // External link
            >
              <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                BOOK YOUR {button} NOW
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src={image2} className="w-80 h-auto ml-10 mr-5" alt="Studio" />
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
