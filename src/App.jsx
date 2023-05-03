import React from "react";
import Header from "./Pages/SharedPages/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Pages/SharedPages/Footer";

const App = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Header></Header>
      <div>
      {navigation.state === "loading" &&  <div className="bg-black text-white
      ">"Ohon Loading Oitase"</div> }
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
