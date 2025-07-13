import React from "react";
import imgLogo from "../img/logo.png";
import imgMap from "../img/map-img.png";

const HomePage = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>Evaluate! Fair & Square</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat..
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img src={imgLogo} alt="logo" className="m-2 img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header card-title">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                omnis, possimus at illo tempore mollitia ipsa sunt harum ducimus
                velit asperiores, neque vero dicta cumque, incidunt quaerat
                error obcaecati voluptatibus?
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header card-title">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                omnis, possimus at illo tempore mollitia ipsa sunt harum ducimus
                velit asperiores, neque vero dicta cumque, incidunt quaerat
                error obcaecati voluptatibus?
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-header card-title">
                <h5>Lorem Ipsum</h5>
              </div>
              <div className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
                omnis, possimus at illo tempore mollitia ipsa sunt harum ducimus
                velit asperiores, neque vero dicta cumque, incidunt quaerat
                error obcaecati voluptatibus?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="content-section mt-5">
              <div className="divider">
                <div className="divider-fade"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={imgMap} alt="map" className="mt-4 img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
