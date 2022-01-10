import React from "react";

import { Route } from "react-router-dom";

// import Layouts
import FoodLayout from "../Layout/Food.Layout";

const FoodLayoutHOC = ({component: Component, ...rest}) =>{
    return(
        <>
            <Route {...rest}
                component = {(props)=>(
                    <FoodLayout>
                        <Component {...props}/>
                    </FoodLayout>
                )}
            />
        </>
    );
};

export default FoodLayoutHOC;