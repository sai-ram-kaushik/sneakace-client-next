import React from "react";
import ProductSearch from "../../sections/ProductSearch";
import ProductGrid from "../../sections/ProductGrid";
import TransitionEffect from "../../components/TransitionEffect";
const Products = () => {
  return (
    <div className="w-full p-3">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <ProductSearch />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Products;
