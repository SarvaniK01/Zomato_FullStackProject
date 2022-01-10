import React from "react";

import Navbar from "../Components/Navbar/navbar";
import Delivery from "../Components/Delivery";
import FoodTab from "../Components/FoodTab";

const DeliveryLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar />
                <Delivery />
                <FoodTab/>
                {/* {props.children} */}
            </div>
        </>
    );
};

export default DeliveryLayout;