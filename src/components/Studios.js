import React from "react";

import podcastStudio from "../assets/studios/podcast-studio.svg";
import ps from "../assets/studios/ps.png";

import StudioCard from "./StudioCard";

import photographyStudio from "../assets/studios/photography-studio.svg";
import phs from "../assets/studios/phs.png";

import coworkingSpace from "../assets/studios/coworking-space.svg";
import cs from "../assets/studios/cs.png";

import meetingRoom from "../assets/studios/meeting-room.svg";
import mr from "../assets/studios/mr.png";

import line1 from "../assets/studios/blue-line1.svg";
import line2 from "../assets/studios/blue-line2.svg";
import line3 from "../assets/studios/orange-line1.png";
import line4 from "../assets/studios/orange-line2.png";

const Studios = () => {
  return (
    <div className="bg-primeColor text-white font-poppins">
      <div className="relative flex w-full flex-col lg:flex-row">
      <img
          src={line1}
          alt="Background"
          className="absolute -top-6 left-0 w-5/6 h-auto md:-top-52 md:w-1/2"
        />
        <StudioCard
          image1={podcastStudio}
          image2={ps}
          button={"STUDIO"}
          description={
            <>
              A COMFORTABLE SPACE FOR HOSTING, RECORDING
              <br />
              AND PRODUCING PROFESSIONAL <b>AUDIO CONTENT</b>,<br />
              EQUIPPED <b>WITH MICROPHONES AND RECORDER</b>.
            </>
          }
        />

        {/* DIVIDER */}
        <div className="divider h-1 w-20 mx-auto lg:divider-horizontal bg-secondColor lg:h-40 lg:w-0.5 lg:my-auto"></div>

        {/* CONTENT SECTION */}
        <div className="card grid grid-cols-1 md:grid-cols-2">
          {/* Image and Paragraph Section */}
          <div className="card rounded-box flex-grow ml-5">
            <div className="flex flex-col">
              {" "}
              {/* Stack image and paragraph vertically */}
              <img
                src={photographyStudio}
                alt="Podcast Studio"
                className="mb-14 w-92"
              />
              <p className="text-white mb-14 text-sm">
                <b>A FULLY</b> EQUIPPED <b>STUDIO</b> WITH
                <br />
                <b>LIGHTING</b>, CAMERAS,{" "}
                <b>
                  SETUP FOR <br />
                  SHOTS
                </b>
              </p>
              <a
                href="https://creocreatorclub.simplybook.me/v2/" // External link
              >
                <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                  BOOK YOUR SHOOT NOW
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={phs} className="w-80 h-auto ml-2 mr-10" alt="Studio" />
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col lg:flex-row py-40">
      <img
          src={line2}
          alt="Background"
          className="absolute inset-x-1/3 w-3/4 h-auto md:-top-8 md:w-1/2"
        />
        <StudioCard
          image1={coworkingSpace}
          image2={cs}
          button={"SPACE"}
          description={
            <>
              IT’S NOT JUST A WORKING SPACE <b>IT’S A CREATIVE HUB </b>
            </>
          }
        />

        {/* DIVIDER */}
        <div className="divider h-1 w-20 mx-auto lg:divider-horizontal bg-secondColor lg:h-40 lg:w-0.5 lg:my-auto"></div>

        {/* CONTENT SECTION */}
        <img
          src={line3}
          alt="Background"
          className="absolute w-3/4 h-auto md:-bottom-72 md:w-1/4"
        />

<img
          src={line4}
          alt="Background"
          className="absolute right-0 w-3/4 h-auto md:-bottom-72 md:w-1/4"
        />
        <div className="card grid grid-cols-1 md:grid-cols-2">
        
          {/* Image and Paragraph Section */}
          <div className="card rounded-box flex-grow ml-5">
            <div className="flex flex-col">
              {" "}
            {/* Stack image and paragraph vertically */}
                          <img
                            src={meetingRoom}
                            alt="Podcast Studio"
                            className="mb-8 w-48"
                          />
                          <p className="text-white mb-9 text-sm">
                          <b>WE HELP YOU TURN</b> ANY IDEA, NO MATTER HOW <br/>
                          BIG OR SMALL, <b>INTO YOUR BEST WORK YET</b>
                          </p>
                          <a
                            href="https://creocreatorclub.simplybook.me/v2/" // External link
              >
                <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                  BOOK YOUR ROOM NOW
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={mr} className="w-80 h-auto  mr-10" alt="Studio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studios;