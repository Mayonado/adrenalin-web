import React from "react";
import darkLogo from "assets/images/logo-dark.png";

const PageLoader = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-white justify-center items-center">
      <div className="w-48">
        <img src={darkLogo} className="w-full h-auto" />
        <div className="w-full flex my-8 justify-center items-center">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default PageLoader;
