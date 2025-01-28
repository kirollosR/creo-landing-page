import React from 'react';
import EquipmentCard from './EquipmentCard';

import eq1 from "../assets/equipments/eq1.png";
import eq2 from "../assets/equipments/eq2.png";
import eq3 from "../assets/equipments/eq3.png";

const EquipmentsLayout = () => {
    return (
        <div className="flex flex-col items-center bg-primeColor font-poppins pb-20">
          {/* Title for the Middle Image */}
          <h2 className="relative top-6 text-lg md:text-6xl font-bold text-secondColor">EQUIPMENTS</h2>
    
          {/* Container for the Three Images */}
          <div className="flex relative">
            {/* Left Image */}
            <div className="w-1/3">
              <EquipmentCard
                imageUrl={eq1}
                title="LIGHTING"
                description="Our lighting equipment includes 
adjustable LED panels, softboxes, 
and head lights, offering full 
control over brightness 
and color temperature. "
              />
            </div>
    
            {/* Middle Image (Slightly Lower) */}
            <div className="w-1/3 relative top-6"> {/* Adjust `top-8` to control how much lower it is */}
              <EquipmentCard
                imageUrl={eq2}
                title="CAMERAS"
                description="The canon CN7 is a high-performance 
camera
offering stunning image quality and 
versatility. With advanced sensor 
technology, lens compatibility, and
precise controls,"
              />
            </div>
    
            {/* Right Image */}
            <div className="w-1/3">
              <EquipmentCard
                imageUrl={eq3}
                title="MICROPHONE"
                description="The shure sm7db microphone delivers 
exceptional sound quality with advanced noise isolation and clarity. 
it captures rich, detailed audio 
in any environment."
              />
            </div>
          </div>
        </div>
      );
};

export default EquipmentsLayout;