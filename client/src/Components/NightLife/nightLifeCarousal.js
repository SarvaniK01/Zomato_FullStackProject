import React from "react";

import NightLifeFoodCategory from "./nightLifeFoodCategory";

const NightLifeCarousal = () => {
    return(
        <>
            <h1 className="text-xl font-semibold my-3">Nightlife Restaurants in Pune</h1>
            <div className="flex flex-wrap justify-evenly gap-3">
                <NightLifeFoodCategory/>
                <NightLifeFoodCategory/>
                <NightLifeFoodCategory/>
                <NightLifeFoodCategory/>
                <NightLifeFoodCategory/>
            </div>
        </>
    );
}

export default NightLifeCarousal;