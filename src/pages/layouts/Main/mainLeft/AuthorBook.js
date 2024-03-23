import React from "react";

export default function AuthorBook() {
  return (
    <div className="myNewBook myAuthorBook">
      <h4>Tác Giả Nổi Bật</h4>
      <div className="card mb-3 myNewBook-container mt-4">
        <div className="row no-gutters">
          <div className="col-md-4 myNewBook-divImg1">
            <a href="/#">
              <img
                className="w-100 myNewBook-img-1"
                src="./images/author/author-1.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="col-md-8 myNewBook__fontSize">
            <div className="card-body">
              <h4 className="card-title">Nguyên Phong</h4>
              <p className="card-text myNewBook__border">
                Nguyên Phong tên thật là Vũ Văn Du, sinh năm 1950 tại Hà Nội.
                Năm 1968, ông rời khỏi Việt Nam, sang Hoa Kỳ du học hai nghành
                Sinh vật học và Điện toán, sau đó ông sống và làm việc tại Hoa
                Kỳ cho đến nay.Bên cạnh vai trò là một nhà khoa học, Nguyên
                Phong còn là dịch giả của hàng loạt sách về văn hóa và tâm linh
                phương Đông rất nổi tiếng. Trong số đó, có thể kể đến: Hành
                Trình Về Phương Đông, Ngọc Sáng Trong Hoa Sen, Bên Rặng Tuyết
                Sơn, Hoa Sen Trên Tuyết, Hoa Trôi Trên Sóng Nước, Trở Về Từ Xứ
                Tuyết, Minh Triết Trong Đời Sống Ăn Uống, Đường Mây Qua Xứ
                Tuyết…
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer myAuthorBook-cardFooter">
          <div className="row">
            <div className="col-4 d-flex myAuthorBook-d1">
              <a href="/#" className=" mr-3">
                <img className="w-100" src="./images/books/booksProduct/book-1.jpg" alt="" />
              </a>
              <a href="/#">Trở Về Từ Cõi Sáng (Tái Bản 2023)</a>
            </div>
            <div className="col-4 d-flex myAuthorBook-d1">
              <a href="/#" className="mr-3">
                <img className="w-100" src="./images/books/booksProduct/book-1.jpg" alt="" />
              </a>
              <a href="/#">Trở Về Từ Cõi Sáng (Tái Bản 2023)</a>
            </div>
            <div className="col-4 d-flex myAuthorBook-d1 ">
              <a href="/#" className="mr-3">
                <img className="w-100" src="./images/books/booksProduct/book-1.jpg" alt="" />
              </a>
              <a href="/#">Trở Về Từ Cõi Sáng (Tái Bản 2023)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// src="./images/books/booksProduct/book-1.jpg"
