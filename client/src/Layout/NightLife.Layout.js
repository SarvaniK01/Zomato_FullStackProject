import React from "react";
import FoodTab from "../Components/FoodTab";

import Navbar from "../Components/Navbar/navbar";
import NightLife from "../Components/NightLife";

const NightLifeLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar />
                <NightLife />
                <FoodTab/>
                {/* {props.children} */}
            </div>
        </>
    );
};

export default NightLifeLayout;