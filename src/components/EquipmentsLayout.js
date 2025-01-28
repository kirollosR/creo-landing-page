import React from 'react';
import EquipmentCard from './EquipmentCard';

import eq1 from "../assets/equipments/eq1.png";
import eq2 from "../assets/equipments/eq2.png";
import eq3 from "../assets/equipments/eq3.png";

const EquipmentsLayout = () => {
    return (
        <div className="flex flex-col items-center bg-primeColor font-poppins pb-20">
            {/* Title for the Equipments Section */}
            <h2 className="text-4xl md:relative md:top-24 md:pr-0 md:text-7xl font-bold text-secondColor mb-6">EQUIPMENTS</h2>

            {/* Responsive Container for the Equipment Cards */}
            <div className="flex flex-col md:flex-row w-full md:space-x-4">
                {/* Left Image */}
                <div className="w-full md:w-1/3 md:mb-0">
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

                {/* Middle Image */}
                <div className="w-full md:w-1/3 md:relative md:top-20 md:mb-0">
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
                <div className="w-full md:w-1/3">
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
