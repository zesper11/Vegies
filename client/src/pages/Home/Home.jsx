import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(
      category === "All"
        ? "/shop"
        : `/shop?category=${encodeURIComponent(category)}`,
    );
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategorySelect}
      />
    </>
  );
};

export default Home;
