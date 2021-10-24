import React from "react";
import whiteLogo from "assets/images/logo-white.png";

const Footer = () => {
  return (
    <div className="w-full bg-primaryDark flex flex-row sm:justify-center py-4 sm:py-8">
      {/* <div className="w-2/6">
        <img src={whiteLogo} alt="White Logo" />
      </div>
      <div className="flex w-2/6 text-white justify-end">
        Front-end developer test page - October 2021
      </div> */}
      <div className="flex flex-col sm:flex-row sm:container px-8 sm:px-8 md:px-8 lg:px-8 xl:px-0">
        <div className="w-full sm:w-6/12 py-1">
          <img src={whiteLogo} alt="White Logo" />
        </div>
        <div className="flex w-full sm:w-6/12 text-white justify-end py-1">
          Lizandro Mayonado - October 2021
        </div>
      </div>
    </div>
  );
};
export default Footer;
