import React from "react";

import { Route } from "react-router-dom";

// import Layouts
import DeliveryLayout from "../Layout/Delivery.Layout"

const DeliveryLayoutHOC = ({component: Component, ...rest}) =>{
    return(
        <>
            <Route {...rest}
                component = {(props)=>(
                    <DeliveryLayout>
                        <Component {...props}/>
                    </DeliveryLayout>
                )}
            />
        </>
    );
};

export default DeliveryLayoutHOC;