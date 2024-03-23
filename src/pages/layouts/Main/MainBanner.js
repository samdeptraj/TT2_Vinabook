import React from "react";

export default function MainBanner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">
          <div className="row">
            <div className="col-8">
              <div className="row overflow-hidden">
                <div className="col-12 p-0">
                  <img
                    className="w-100"
                    src="./images/banner/banner-1.jpg"
                    alt=""
                  />
                </div>
                <div className="row">
                  <div className="col-6 p-0 ">
                    <a href="/#">
                      {" "}
                      <img
                        className="w-100 h-75"
                        src="./images/banner/banner-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="col-6 p-0">
                    <a href="/#">
                      <img
                        className="w-100 h-75"
                        src="./images/banner/banner-3.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 p-0">
              <a href="/#">
                <img
                  className="w-100"
                  src="./images/banner/banner-4.jpg"
                  alt=""
                />
              </a>
              <a href="/#">
                <img
                  className="w-100"
                  src="./images/banner/banner-5.jpg"
                  alt=""
                />
              </a>
              <a href="/#">
                <img
                  className="w-100"
                  src="./images/banner/banner-6.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
