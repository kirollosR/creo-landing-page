import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Footer from "./components/Footer";
import CreatedToCreate from "./components/CreatedToCreate";
import Studios from "./components/Studios";

import EquipmentsLayout from "./components/EquipmentsLayout";

function App() {
  return (
    <div className="">
      <Navbar />
      <Video />
      <CreatedToCreate />
      <Studios />
      <EquipmentsLayout />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <div className="flex justify-center items-center h-screen">
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
    </div> */
}
