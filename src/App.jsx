import React from "react";
import Header from "./Pages/SharedPages/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/SharedPages/Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
