import React from "react";
import ProductMain from "./ProductMain";

export default function EconomicBook() {
  const typeBook = "economic";
  return (
    <div>
      <ProductMain typeBook={typeBook} type="Sách Kinh Tế Mới" />
    </div>
  );
}
