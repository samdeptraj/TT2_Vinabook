import React from "react";
import ProductMain from "./ProductMain";

export default function LiteratureBook() {
  const typeBook = "vanhoc";
  return (
    <div>
      <ProductMain typeBook={typeBook} type="Sách Văn Học Mới" />
    </div>
  );
}
