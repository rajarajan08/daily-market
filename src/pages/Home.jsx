import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import "./Home.css";
import Card from "../components/Card/Card";

const categories = [
  {
    name: "Fruits & Vegetables",
  },
  {
    name: "Dairy & BreakFast",
  },
  {
    name: "Snacks & Beverages",
  },
  {
    name: "Household & Personal Care",
  },
  {
    name: "Meat, Fish & Eggs",
  },
  {
    name: "Grocery & Staples",
  },
];

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="homeContainer">
        {categories.map((category, index) => (
          <Card title={category.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
