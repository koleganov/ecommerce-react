import React from "react";
import { useEffect } from "react";
import FeatureCard from "../FeatureCard";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return <FeatureCard cards={categories} />;
};

export default Categories;
