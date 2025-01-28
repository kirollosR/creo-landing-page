import { useRef } from "react";
import video from "../assets/Creo banner second version (1).mp4";

const Video = () => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex items-center justify-center h-1/2 px-10 pb-10 bg-[#1263B0]">
      <video
        ref={videoRef}
        className="w-3/5 h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
