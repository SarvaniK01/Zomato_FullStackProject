import React from "react";

import Navbar from "../Components/Navbar/navbar";
import DiningOut from "../Components/DiningOut";


const DiningOutLayout = (props) =>{
    return(
        <>
            <div className="">
                <Navbar />
                <DiningOut />
                {/* {props.children} */}
            </div>
        </>
    );
};

export default DiningOutLayout;