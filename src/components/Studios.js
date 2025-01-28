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
      {/* First Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 py-10 lg:py-20">
        <img
          src={line1}
          alt="Background"
          className="absolute -top-6 left-0 w-5/6 h-auto md:-top-52 md:w-1/2 lg:-top-20 lg:w-1/3"
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
        <div className="h-1 w-20 mx-auto bg-secondColor lg:h-auto lg:w-0.5"></div>

        {/* CONTENT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:px-10">
          {/* Image and Paragraph Section */}
          <div className="">
            <div className="grid place-items-center lg:place-items-start">
              <img
                src={photographyStudio}
                alt="Podcast Studio"
                className="mb-8 w-48 lg:w-64 "
              />
              <p className="text-white mb-8 text-sm text-center lg:text-left">
                <b>A FULLY</b> EQUIPPED <b>STUDIO</b> WITH
                <br />
                <b>LIGHTING</b>, CAMERAS, {" "}
                <b>
                  SETUP FOR <br />
                  SHOTS
                </b>
              </p>
              <a href="https://creocreatorclub.simplybook.me/v2/">
                <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                  BOOK YOUR SHOOT NOW
                </button>
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="grid place-items-center">
            <img src={phs} className="w-80 h-auto" alt="Studio" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 py-20 lg:pt-40">
        <img
          src={line2}
          alt="Background"
          className="absolute inset-x-1/3 w-3/4 h-auto md:-top-8 md:w-1/2 lg:-top-20 lg:w-1/3"
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
        <div className="h-1 w-20 mx-auto bg-secondColor lg:h-auto lg:w-0.5"></div>

        {/* CONTENT SECTION */}
        <img
          src={line3}
          alt="Background"
          className="absolute w-3/4 h-auto md:-bottom-80 md:w-1/4 lg:-bottom-96 lg:w-1/4"
        />
        <img
          src={line4}
          alt="Background"
          className="absolute right-0 w-3/4 h-auto md:-bottom-56 md:w-1/4 lg:-bottom-40 lg:w-1/6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:px-10">
          {/* Image and Paragraph Section */}
          <div className="order-2 md:order-1">
            <div className="grid place-items-center lg:place-items-start">
              <img
                src={meetingRoom}
                alt="Podcast Studio"
                className="mb-8 w-48 lg:w-64"
              />
              <p className="text-white mb-8 text-sm text-center lg:text-left">
                <b>WE HELP YOU TURN</b> ANY IDEA, NO MATTER HOW <br />
                BIG OR SMALL, <b>INTO YOUR BEST WORK YET</b>
              </p>
              <a href="https://creocreatorclub.simplybook.me/v2/">
                <button className="bg-secondColor text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                  BOOK YOUR ROOM NOW
                </button>
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="grid place-items-center order-2 md:order-2">
            <img src={mr} className="w-80 h-auto" alt="Studio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studios;
