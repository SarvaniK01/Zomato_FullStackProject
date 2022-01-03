import React from "react";

import DiningOutFoodCategory from "./diningOutFoodCategory";

const DiningOutCarousal = () => {
    return(
        <>
            <h1 className="text-xl font-semibold my-3">Dine Out</h1>
            <div className="flex flex-wrap justify-between gap-3">
                <DiningOutFoodCategory/>
                <DiningOutFoodCategory/>
                <DiningOutFoodCategory/>
            </div>
        </>
    );
};

export default DiningOutCarousal;



