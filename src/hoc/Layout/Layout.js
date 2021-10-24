import React from "react";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <Nav />
      <div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-0 sm:container w-full py-8 m-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
