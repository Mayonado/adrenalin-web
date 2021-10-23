import React, { useEffect } from "react";
import Layout from "hoc/Layout/Layout";
import arrowDown from "assets/svgs/arrow-down.svg";
import searchIcon from "assets/svgs/search.svg";
import mountains from "feed/data.json";
import denali from "assets/images/denali.jpg";
import himalayas from "assets/images/himalayas.jpg";
import pakistan from "assets/images/pakistan.jpg";
import kilimanjaro from "assets/images/kilimanjaro.jpg";
import greece from "assets/images/greece.jpg";
import blanc from "assets/images/blanc.jpg";
import patagonia from "assets/images/patagonia.jpg";
import italy from "assets/images/italy.jpg";
import FeedItem from "./FeedItem/FeedItem";
import Pagination from "components/Pagination/Pagination";

const bgImages = [
  denali,
  himalayas,
  pakistan,
  kilimanjaro,
  greece,
  blanc,
  patagonia,
  italy,
];

const Feed = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-row w-full gap-16 py-4">
          <div className="w-4/6">
            <img src={searchIcon} className="absolute h-5 my-3 mx-4" />
            <input
              className="w-full border-gray-300 border py-2.5 px-12 rounded-md placeholder-black"
              placeholder="Search for mountains"
            />
          </div>
          <div className="w-2/6 flex justify-end">
            <button className="flex flex-row items-center justify-center gap-4 border border-gray-300 px-8 py-2.5 text-primary">
              <span>Sort a A - Z</span>
              <img src={arrowDown} alt="Arrow down" className="h-2" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {mountains.map((mountain, mountainIndex) => (
            <FeedItem
              mountain={mountain}
              mountainIndex={mountainIndex}
              bgImages={bgImages}
              key={mountain.id}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 my-2 w-full justify-center items-center">
          <div className="w-full">
            <Pagination
              activePage={1}
              onChangePage={() => console.log("ahe ahe")}
              totalRows={100}
            />
          </div>
          <div className="w-full text-right">
            <button className="px-16 py-4 bg-primary text-white rounded-md">
              Show next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
