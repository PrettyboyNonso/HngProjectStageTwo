import { useContext, useState } from "react";
import { Copyright } from "./Copyright";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductCard } from "./ProductsCard";
import { CountContext } from "../App";

export const ProductSection = () => {
  const { products, visibility } = useContext(CountContext);
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div className="products-div-section">
        {products.map((product, index) => (
          <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            stock={product.stock}
            count={product.count}
            id={product.id}
          />
        ))}
      </div>
      {visibility && (
        <div className="item-added-to-cart">
          <p>your item has been added to the cart</p>
        </div>
      )}
      <Footer />
      <Copyright />
    </div>
  );
};
