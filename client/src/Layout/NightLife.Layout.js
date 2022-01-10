import React from "react";

import Navbar from "../Components/Navbar/navbar";
import NightLife from "../Components/NightLife";

const NightLifeLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar />
                <NightLife />
                {/* {props.children} */}
            </div>
        </>
    );
};

export default NightLifeLayout;