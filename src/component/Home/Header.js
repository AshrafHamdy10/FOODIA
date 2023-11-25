import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Good food choices are Good investments.</h2>
              <p>
                Consequat cillum laboris eu culpa nisi consequat nisi sunt
                minim.Qui exercitation deserunt quis velit.
              </p>
              <button>Order Now</button>
              <button>Learn More</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
