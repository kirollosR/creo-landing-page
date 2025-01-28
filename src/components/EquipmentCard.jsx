import PropTypes from "prop-types";

const EquipmentCard = ({
  imageUrl,
  title,
  description,
  hoverBgColor = "bg-[#D9D9D9]",
}) => {
  return (
    <div className="relative group overflow-hidden">
      {/* Image */}
      <img
        src={imageUrl}
        alt="Hoverable Image"
        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
      />

      {/* Background Color Overlay */}
      <div
        className={`absolute inset-0 ${hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        {/* Title */}
        <p className="text-[#E96759] text-center font-bold text-lg md:text-4xl md:mb-6">
          {title}
        </p>
        {/* Description */}
        <p className="text-[#1263B0] text-center text-xs md:text-lg md:px-20">
          {description}
        </p>
      </div>
    </div>
  );
};

EquipmentCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string,
};

export default EquipmentCard;
