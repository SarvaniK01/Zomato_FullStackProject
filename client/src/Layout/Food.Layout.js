import React from "react";

import Navbar from "../Components/Navbar/navbar";
import FoodTab from "../Components/FoodTab";

const FoodLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar/>
                <FoodTab/>
                {/* {props.children} */}
            </div>
        </>
    )
};

export default FoodLayout;