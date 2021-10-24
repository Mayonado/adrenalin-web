import React from "react";
import noMountain from "assets/svgs/no-mountain.svg";

const Nodata = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-80">
        <img src={noMountain} alt="No data found" className="w-full" />
        <div className="text-center items-center text-2xl p-4">
          No mountain found!
        </div>
        <div className="text-center">
          Seems like you've entered the ID wrong.
        </div>
      </div>
    </div>
  );
};
export default Nodata;
