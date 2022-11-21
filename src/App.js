import React from "react";
import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-up";
import Cart from "./components/Cart/Cart";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
      <ScrollToTop showUnder={160}>
        <span>
          <FontAwesomeIcon icon={faUpLong} />
        </span>
      </ScrollToTop>
    </div>
  );
}

export default App;
