import React from "react";
import whiteLogo from "assets/images/logo-white.png";
import { routes } from "routes";
import { useLocation } from "react-router";

const Nav = () => {
  const location = useLocation();
  const routeIndex = location.pathname === "/" ? 0 : 1;
  const route = routes[routeIndex];
  return (
    <div className="bg-mobile-banner sm:bg-bannerImg min-h-mobile-banner sm:min-h-desktop-banner bg-no-repeat bg-cover grid grid-cols-2">
      <div className="flex flex-col pl-8 sm:pl-64">
        <div className="my-8 sm:my-20">
          <img src={whiteLogo} />
        </div>
        <div className="my-2 sm:my-8 text-white font-black text-3xl sm:text-7xl">
          {route.title}
        </div>
        <div className="text-white text-sm sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          ex ut blandit condimentum.
        </div>
      </div>
    </div>
  );
};

export default Nav;
