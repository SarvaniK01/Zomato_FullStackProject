import React from "react";

import { ImLocation } from "react-icons/im";
import {IoMdArrowDropdown} from "react-icons/io";
import {BiSearch} from "react-icons/bi";

const MobileNav = () => {
    return(
        <>
            <div className="w-full h-full flex">
                <img
                 src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                 alt="zomato-logo"
                 className="w-21 h-7 my-7 mx-7"
                />

                <div className="flex border w-full h-14 my-3 rounded-md shadow border-slate">
                    <div className="flex">
                        <ImLocation className="w-10 h-6 my-4 text-zomato"/>
                        <h3 className="my-5 px-1 w-40 h-10 text-xs text-gray">Budhwar Peth</h3>
                        <IoMdArrowDropdown className="w-8 h-7 my-4 text-grey"/>
                        <div className="w-1 h-1 bg-black visible"></div>
                    </div>

                    <div className="flex w-full mx-4">
                        <BiSearch className="w-6 h-6 my-4 text-gray"/>
                        <input
                            type="search"
                            placeholder="Search for restaurant, cuisine or a dish"
                            className="w-full h-10 my-2 px-3 text-gray"
                        ></input>
                    </div>
                    
                </div>

                <div className="flex my-6 ml-12 text-gray">
                    <h1 className="px-4 w-24 text-xl">Log In</h1>
                    <h1 className="w-24 text-xl">Sign Up</h1>
                </div>
            </div>
        </>
    );
}

const Navbar = () =>{
    return(
        <>
            <nav>
                <MobileNav/>
            </nav>
        </>
    )
}

export default Navbar;


