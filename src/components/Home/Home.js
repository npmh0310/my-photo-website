import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-10 wrapper-container">
          <h2 className="author">Nguyen Phuoc Minh Hieu</h2>
          <div className="title-home">
            <h3>2019-2023</h3>
            <h1>the beauty of the world in my eyes year after year</h1>
          </div>
          <Link to="/photo" className=" btn-primary mt-3 btn-photo">
            View photo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
