import React from "react";
import { products } from "../../data";
import ProductContainer from "../../components/ProductContainer";
import ProductItem from "../../components/ProductItem";
import { Link } from "react-router-dom";

const Hats = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-center space-x-10 font-semibold text-pink-600 mt-5">
        <Link to={"/shop/hats"}>Nosepin</Link>
        <Link to={"/shop/jackets"}>Nacklace</Link>
        <Link to={"/shop/sneakers"}>Ear Rings</Link>
        <Link to={"/shop/womens"}>Rings</Link>
        <Link to={"/shop/mens"}>Bracelets</Link>
      </div>
      <div className=" md:hidden flex items-center justify-center space-x-10 font-semibold text-pink-600 mt-5">
        <Link to={"/explore"}>All Categories</Link>
      </div>
      <ProductContainer>
        {products.hats.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ProductContainer>
    </>
  );
};

export default Hats;
