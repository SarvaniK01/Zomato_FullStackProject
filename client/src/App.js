import React from "react";

//import HOCs
import HomeLayoutHOC from "./HOC/Home.Hoc";
import FoodLayoutHOC from "./HOC/Food.Hoc";
import DeliveryLayoutHOC from "./HOC/Delivery.Hoc";
import DiningOutLayoutHOC from "./HOC/DiningOut.Hoc";
import NightLifeLayoutHOC from "./HOC/NightLife.Hoc";

// import Components
import Navbar from "./Components/Navbar/navbar";
import FoodTab from "./Components/FoodTab";
import Delivery from "./Components/Delivery";
import DiningOut from "./Components/DiningOut";
import NightLife from "./Components/NightLife";

function App() {
    return(
      <>
        <HomeLayoutHOC path="/" exact component={Navbar}/>
        <FoodLayoutHOC path="/food" exact component={FoodTab}/>
        <DeliveryLayoutHOC path="/delivery" exact component={Delivery}/>
        <DiningOutLayoutHOC path="/dining-out" exact component={DiningOut}/>
        <NightLifeLayoutHOC path="/night-life" exact component={NightLife}/>
      </>
    )
};

export default App;
