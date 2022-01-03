import React from "react";

import HomeLayoutHOC from "./HOC/Home.Hoc";
import Navbar from "./Components/Navbar/navbar";

function App() {
    return(
      <>
        <HomeLayoutHOC path="/" exact component={Navbar}/>
      </>
    )
};

export default App;
