import React from "react";

const HomePage = () => {
  return (
    <>
      <div class="container mt-3">
        <div className="row">
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="content-section mt-5">
              <div class="divider">
                <div class="divider-fade"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
