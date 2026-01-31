import React from "react";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";
import SideBar from "./components/Sidebar/SideBar";

const App = () => {
  return (
    <>
      <SideBar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
