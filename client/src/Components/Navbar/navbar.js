import React from "react";

const MobileNav = () => {
    return(
        <>
            <h1>This is mobile navbar</h1>
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


