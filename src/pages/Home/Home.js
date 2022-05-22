import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import "./Home.css";
import Reviews from "./Reviews";
const Home = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <Banner />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
