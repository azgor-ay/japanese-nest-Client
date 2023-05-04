import React from "react";
import Header from "./Pages/SharedPages/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Pages/SharedPages/Footer";

const App = () => {
  const navigation = useNavigation();
  if (navigation.state == "loading") {
    return (
      <div className="text-center">
        <div
          className="bg-black radial-progress text-primary mx-auto"
          style={{ "--value": 70 }}
        >
          Loading
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
