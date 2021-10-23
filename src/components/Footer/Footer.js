import React from "react";
import whiteLogo from "assets/images/logo-white.png";

const Footer = () => {
  return (
    <div className="w-full p-2 bg-primaryDark flex flex-row justify-center py-8">
      {/* <div className="w-2/6">
        <img src={whiteLogo} alt="White Logo" />
      </div>
      <div className="flex w-2/6 text-white justify-end">
        Front-end developer test page - October 2021
      </div> */}
      <div className="flex flex-row container">
        <div className="w-6/12">
          <img src={whiteLogo} alt="White Logo" />
        </div>
        <div className="flex w-6/12 text-white justify-end">
          Front-end developer test page - October 2021
        </div>
      </div>
    </div>
  );
};
export default Footer;
