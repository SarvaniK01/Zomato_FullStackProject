import React, {useState} from "react";

import {useParams, Link} from "react-router-dom";

import {GiScooter, GiKnifeFork, GiBeerBottle} from "react-icons/gi";

const MobileTab = () =>{
    const [allTypes] = useState([
        {
            id:"delivery",
            icon:<GiScooter/>,
            name:"Delivery",
            isActive:false
        },
        {
            id:"dining",
            icon:<GiKnifeFork/>,
            name:"Dining Out",
            isActive:false
        },
        {
            id:"night-life",
            icon:<GiBeerBottle/>,
            name:"Night Life",
            isActive:false
        }
    ]);

    const { type } = useParams();

    return(
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between text-gray-500 border">
                {allTypes.map((items)=>(
                    <Link to={`/${items.id}`}>
                        <div
                        className={
                            type === items.id
                            ? "flex flex-col items-center text-xl relative text-zomato-400"
                            : "flex flex-col items-center text-xl" 
                        }
                        >
                            <div
                            className={
                                type === items.id && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                            }
                            ></div>
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                        </div>
                    </Link>
                ))
                }
            </div>
        </>
    );
};

const randDiv = () => {
    return(
        <>
            <h1>This is the Foodtab</h1>
        </>
    );
};

const FoodTab = () => {
    return(
        <>
            <div>
                <MobileTab/>
                <randDiv/>
            </div>
        </>
    );
};

export default FoodTab;