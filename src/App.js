import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Footer from "./components/Footer";
import CreatedToCreate from "./components/CreatedToCreate";
import Studios from "./components/Studios";
import EquipmentCard from "./components/EquipmentCard";

import eq1 from "./assets/equipments/eq1.png";
import EquipmentsLayout from "./components/EquipmentsLayout";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <CreatedToCreate />
      <Studios />
      <EquipmentsLayout />
      <Card />

      {/* <div className="flex justify-center items-center h-screen">
      <div className="w-64 h-64">
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
    </div> */}
    
      <Footer />
    </div>
  );
}

export default App;
