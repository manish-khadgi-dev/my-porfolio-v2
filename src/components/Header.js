import React from "react";

import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="" width={100} className=" mix-blend-lighten" />
          </a>

          {/* button */}

          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
