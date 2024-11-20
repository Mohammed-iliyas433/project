import react from "react";
import "./App.css"
import LandingPage from "./stores/pages/Landingpage";
import { Route,Routes } from "react-router-dom";
import Kitchen from "./stores/components/Kitchen";
import MobilePage from "./stores/pages/MobilePage";
import ComputerPage from "./stores/pages/ComputerPage";
import WatchPage from "./stores/pages/WatchPage";
import MenPage from "./stores/pages/MenPage";
import WomanPage from "./stores/pages/WomanPage";
import { furnitureData } from "./stores/data/furniture";
import FurniturePage from "./stores/pages/FurniturePage";
import Ac from "./stores/components/Ac";
import AcPage from "./stores/pages/AcPage";
import KitchenPage from "./stores/pages/KitchenPage";
import FridgePage from "./stores/pages/FridgePage";
import MobileSingle from "./singles/MobileSingle";
import AcSingle from "./singles/AcSingle";
import ComputerSingle from "./singles/ComputerSingle";
import FridgeSingle from "./singles/FridgeSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import KitchenSingle from "./singles/KitchenSingle";
import MenSingle from "./singles/MenSingle";
import WatchSingle from "./singles/WatchSingle";
import WomanSingle from "./singles/WomanSingle";
import UserCart from "./stores/UserCart";
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="kitchen" element={<KitchenPage/>}/>
        <Route path="Mobile" element={<MobilePage/>}/>
        <Route path="Computer" element={<ComputerPage/>}/>
        <Route path="Watch" element={<WatchPage/>}/>
        <Route path="Men" element={<MenPage/>}/>
        <Route path="Woman" element={<WomanPage/>}/>
        <Route path="Furniture" element={<FurniturePage/>}/>
        <Route path="Ac" element={<AcPage/>}/>
        <Route path="Fridge" element={<FridgePage/>}/>
          <Route path="mobiles/:id" element={<MobileSingle/>}/>
          <Route path="Ac/:id" element={<AcSingle/>}/>
          <Route path="Computer/:id" element={<ComputerSingle/>}/>
          <Route path="Fridge/:id" element={<FridgeSingle/>}/>
          <Route path="Furniture/:id" element={<FurnitureSingle/>}/>
          <Route path="Kitchen/:id" element={<KitchenSingle/>}/>
          <Route path="Men/:id" element={<MenSingle/>}/>
          <Route path="Watch/:id" element={<WatchSingle/>}/>
          <Route path="Woman/:id" element={<WomanSingle/>}/>
        <Route path="/cart" element={<UserCart/>}/>
      </Routes>
      
    </div>
  )
}
export default App;