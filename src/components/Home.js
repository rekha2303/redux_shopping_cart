import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);
  return (
    <div className="container">
      <Header />
      <h1>Home</h1>
    </div>
  );
};
export default Home;
