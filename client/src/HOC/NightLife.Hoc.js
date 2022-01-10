import React from "react";

import { Route } from "react-router-dom";

// import Layouts
import NightLifeLayout from "../Layout/NightLife.Layout"

const NightLifeLayoutHOC = ({component: Component, ...rest}) =>{
    return(
        <>
            <Route {...rest}
                component = {(props)=>(
                    <NightLifeLayout>
                        <Component {...props}/>
                    </NightLifeLayout>
                )}
            />
        </>
    );
};

export default NightLifeLayoutHOC;