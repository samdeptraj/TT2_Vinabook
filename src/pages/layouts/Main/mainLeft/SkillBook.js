import React from "react";
import HotSaleBook from "./HotSaleBook";
import ProductMain from "./ProductMain";

export default function SkillBook() {
  const typeBook = "skill";
  return (
    <div>
      <ProductMain typeBook={typeBook} type="Sách Kỹ Năng" />
    </div>
  );
}
