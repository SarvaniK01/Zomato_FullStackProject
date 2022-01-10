import React from "react";

import DeliveryFoodCategory from "./deliveryFoodCategory";

const DeliveryCarousal = () => {
    return(
        <>
            <h1 className="text-xl font-semibold my-3">Order Food Online</h1>
            <div className="flex flex-wrap justify-evenly">
                <DeliveryFoodCategory/>
                <DeliveryFoodCategory/>
                <DeliveryFoodCategory/>
                <DeliveryFoodCategory/>
                <DeliveryFoodCategory/>
            </div>
        </>
    );
};

export default DeliveryCarousal;

