import React from "react";
import Banner from "./Banner";
import Brands from "./Brands";
import BusinessSummary from "./BusinessSummary";
import CarParts from "./CarParts";
import "./Home.css";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <Banner />
      <CarParts />
      <BusinessSummary />
      <Reviews />
      <Brands />
    </div>
  );
};

export default Home;
