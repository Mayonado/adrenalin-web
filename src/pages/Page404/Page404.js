import React from "react";
import page404 from "assets/svgs/page404.svg";

const Page404 = ({ history }) => {
  const onClickGoHome = () => {
    history.replace("/");
  };
  return (
    <div className="flex flex-col h-screen w-screen bg-white justify-center items-center">
      <div className="w-48">
        <img src={page404} className="w-full h-auto" />
      </div>
      <div className="text-xl my-4">Oops! Looks like you're lost.</div>
      <button
        className="bg-primary px-24 py-2 text-white rounded-md"
        onClick={() => onClickGoHome()}
      >
        Go to home
      </button>
    </div>
  );
};
export default Page404;
