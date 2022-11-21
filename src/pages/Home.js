import React from "react";
import { Route, Routes } from "react-router-dom";
import Baskets from "../components/Cards/Baskets/Baskets";
import Burger from "../components/Cards/Burgers/Burger";
import Chickens from "../components/Cards/Chickens/Chickens";
import Deserts from "../components/Cards/Deserts/Deserts";
import Drinks from "../components/Cards/Drinks/Drinks";
import Fries from "../components/Cards/Fries/Fries";
import Souce from "../components/Cards/Souce/Souce";
import Twists from "../components/Cards/Twists/Twists";

const Home = () => {
  return (
    <div>
      <Baskets />
      <Burger />
      <Twists />
      <Chickens />
      <Fries />
      <Souce />
      <Drinks />
      <Deserts />
    </div>
  );
};

export default Home;
