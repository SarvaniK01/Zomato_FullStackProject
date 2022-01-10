import React from "react";

import { Route } from "react-router-dom";

// import Layouts
import DiningOutLayout from "../Layout/DiningOut.Layout"

const DiningOutLayoutHOC = ({component: Component, ...rest}) =>{
    return(
        <>
            <Route {...rest}
                component = {(props)=>(
                    <DiningOutLayout>
                        <Component {...props}/>
                    </DiningOutLayout>
                )}
            />
        </>
    );
};

export default DiningOutLayoutHOC;