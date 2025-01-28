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
// import line3 from "../assets/studios/orange-line1.png";
// import line4 from "../assets/studios/orange-line2.png";

const Studios = () => {
  return (
    <div className="bg-[#1263B0] text-white font-poppins">
      {/* First Section */}
      <div className="container mx-auto py-10 lg:py-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-5">
          <img
            src={line1}
            alt="Background"
            className="absolute -top-10 -left-32 w-5/6 h-auto md:-top-52 md:scale-200 lg:-top-10 lg:w-1/3"
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
          <div className="h-1 w-20 mx-auto bg-[#E96759] lg:h-auto lg:w-0.5"></div>

          {/* Photography Studio Section */}
          <div className="container mx-auto px-4 z-10">
            <div className="card flex flex-col md:grid md:grid-cols-2 gap-4 items-center">
              <div className="order-1 md:order-2 w-5/6 md:w-full flex justify-center">
                <img
                  src={phs}
                  className="w-auto max-w-[320px] h-full"
                  alt="Studio"
                />
              </div>

              <div className="order-2 md:order-1 w-5/6 md:w-full">
                <div className="flex flex-col items-start md:items-start">
                  <img
                    src={photographyStudio}
                    alt="Podcast Studio"
                    className="w-5/6 md:w-full max-w-[256px] mb-8 md:pb-10"
                  />
                  <p className="text-white mb-8 text-xs md:text-sm text-start md:pb-10">
                    <b>A FULLY</b> EQUIPPED <b>STUDIO</b> WITH
                    <br />
                    <b>LIGHTING</b>, CAMERAS,{" "}
                    <b>
                      SETUP FOR <br />
                      SHOTS
                    </b>
                  </p>
                  <a
                    href="https://creocreatorclub.simplybook.me/v2/"
                    className="inline-block"
                  >
                    <button className="bg-[#E96759] text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                      BOOK YOUR SHOOT NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-4 py-10 lg:py-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-10">
          <img
            src={line2}
            alt="Background"
            className="absolute inset-x-1/3 w-3/4 h-auto md:-top-8 md:w-1/2 lg:-top-20 lg:w-1/3"
          />

          <div className="container mx-auto py-4 z-10">
            <div className="card flex flex-col md:grid md:grid-cols-2 gap-4 items-center">
              <div className="order-1 md:order-2 w-5/6 md:w-full flex justify-center">
                <img
                  src={cs}
                  className="w-auto max-w-[320px] h-full"
                  alt="Studio"
                />
              </div>

              <div className="order-2 md:order-1 w-5/6 md:w-full">
                <div className="flex flex-col items-start md:items-start">
                  <img
                    src={coworkingSpace}
                    alt="Podcast Studio"
                    className="w-5/6 md:w-3/4 max-w-[256px] mb-8 md:pb-10"
                  />
                  <p className="text-white mb-8 text-xs md:text-sm text-start md:pb-10">
                    IT&apos;S NOT JUST A WORKING SPACE{" "}
                    <b>IT&apos;S A CREATIVE HUB </b>
                  </p>
                  <a
                    href="https://creocreatorclub.simplybook.me/v2/"
                    className="inline-block"
                  >
                    <button className="bg-[#E96759] text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                      BOOK YOUR SPACE NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-1 w-20 mx-auto bg-[#E96759] lg:h-auto lg:w-0.5"></div>

          {/* Meeting Room Section */}
          <div className="container mx-auto py-4 z-10">
            <div className="card flex flex-col md:grid md:grid-cols-2 gap-4 items-center">
              <div className="order-1 md:order-2 w-5/6 md:w-full flex justify-center">
                <img
                  src={mr}
                  className="w-auto max-w-[320px] h-full"
                  alt="Studio"
                />
              </div>

              <div className="order-2 md:order-1 w-5/6 md:w-full">
                <div className="flex flex-col items-start md:items-start">
                  <img
                    src={meetingRoom}
                    alt="Podcast Studio"
                    className="w-5/6 md:w-3/4 max-w-[256px] mb-8"
                  />
                  <p className="text-white mb-8 text-xs md:text-sm text-start">
                    <b>WE HELP YOU TURN</b> ANY IDEA, NO MATTER HOW <br />
                    BIG OR SMALL, <b>INTO YOUR BEST WORK YET</b>
                  </p>
                  <a
                    href="https://creocreatorclub.simplybook.me/v2/"
                    className="inline-block"
                  >
                    <button className="bg-[#E96759] text-white py-2 px-4 hover:bg-opacity-80 transition duration-300 w-40">
                      BOOK YOUR ROOM NOW
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studios;
