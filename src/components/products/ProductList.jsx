import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProducts } from "../../recoil/productRecoil";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useRecoilValue(filteredProducts);
  return (
    <div className="columns is-multiline">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
