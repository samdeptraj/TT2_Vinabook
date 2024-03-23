import React from "react";
import ProductMain from "./ProductMain";

export default function HotSaleBook() {
  const typeBook = "hotbooks";
  return (
    <div>
      <ProductMain typeBook={typeBook} type="Sách Bán Chạy"/>
    </div>
  );
}
