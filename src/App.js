import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
