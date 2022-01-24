import React from "react";

import Navbar from "../Components/Navbar/navbar";
import DiningOut from "../Components/DiningOut";
import FoodTab from "../Components/FoodTab";


const DiningOutLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar />
                <DiningOut />
                <FoodTab/>
                {/* {props.children} */}
            </div>
        </>
    );
};

export default DiningOutLayout;