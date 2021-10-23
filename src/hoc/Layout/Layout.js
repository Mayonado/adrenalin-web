import React from "react";
import Nav from "components/Nav/Nav";
import Footer from "components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <Nav />
      <div className="container w-full py-8 m-auto">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
