import CreatedText from "../assets/created-to-create.svg";
import CreatedLine from "../assets/created-line.svg";

const CreatedToCreate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#1263B0] text-white font-poppins p-4">
      {/* Left Column */}
      <div className="relative">
        {/* Adjust heights for mobile */}
        <div className="h-40 sm:h-48 md:h-80" />
        <div className="h-40 sm:h-32 md:h-64" />
        <img
          src={CreatedLine}
          alt="Background"
          className="absolute bottom-0 left-0 w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 pl-4 sm:pl-8 md:pl-20">
          <img
            src={CreatedText}
            className="w-3/4 sm:w-1/2 md:w-auto"
            alt="logo"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="pt-2 sm:pt-12 md:pt-44 pr-4 sm:pr-8 md:pr-20 text-center md:text-left">
        <p className="text-base sm:text-lg md:text-2xl pb-6 sm:pb-8 md:pb-16">
          Stunning Images, Captivating Videos,
          <br /> Perfect Audio Content, Eye Catching Designs.
        </p>
        <p className="text-base sm:text-lg md:text-2xl">
          <b>A world where</b> creators are supported with the tools, the
          spaces, <b>and the inspiration.</b>
        </p>
      </div>
    </div>
  );
};

export default CreatedToCreate;
