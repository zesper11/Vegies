import React from "react";
import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Categories";
import Navbar from "../../components/Navbar";
import Vegies from "../../components/Vegies";

const ShopAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const setSelectedCategory = (category) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (category === "All") {
      nextSearchParams.delete("category");
    } else {
      nextSearchParams.set("category", category);
    }

    setSearchParams(nextSearchParams);
  };

  return (
    <main>
      <Navbar />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Vegies selectedCategory={selectedCategory} />
    </main>
  );
};

export default ShopAll;
