import React from "react";
import ProductCard from "./components/ProductCard";

function AppExp1() {
  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"40px"}}>
      <ProductCard
        name="Smartphone"
        price="15000"
        image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        inStock={true}
      />
      <ProductCard
        name="Headphones"
        price="2000"
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        inStock={false}
      />
    </div>
  );
}

export default AppExp1;
