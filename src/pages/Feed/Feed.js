import React, { useState } from "react";
import Layout from "hoc/Layout/Layout";
import searchIcon from "assets/svgs/search.svg";
import mountainData from "feed/data.json";
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
import SortMenuPopover from "components/SortMenuPopover/SortMenuPopover";
import { stringSanitize, arraySorter } from "utils";

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

// distribute bgImage each data
const data = mountainData.map((mt, mtIndex) => {
  return {
    ...mt,
    img: bgImages[mtIndex],
  };
});

const Feed = () => {
  // initialize search && filter state
  const [searchFilter, setSearchFilter] = useState({
    sort: null,
    keyword: "",
  }); // initialize search && filter state
  const [mountains, setMountains] = useState(data); // mountains data state

  const onChangeSortOrder = (evt, sorting) => {
    const sortedMountains = arraySorter(
      mountains,
      "title",
      sorting ? "desc" : "asc"
    );
    setMountains(sortedMountains);
    setSearchFilter({
      ...searchFilter,
      sort: sorting,
    });
  };

  const onChangeSearch = (evt) => {
    let filteredMountains = data.filter((mountain) => {
      return stringSanitize(mountain.title).includes(
        stringSanitize(evt.target.value)
      );
    });

    if (searchFilter.sort !== null) {
      filteredMountains = arraySorter(
        filteredMountains,
        "title",
        searchFilter.sort ? "desc" : "asc"
      );
    }

    setMountains(filteredMountains);
    setSearchFilter({
      ...searchFilter,
      keyword: evt.target.value,
    });
  };
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-row w-full gap-12 sm:gap-16 py-4">
          <div className="w-5/6 sm:w-4/6">
            <img src={searchIcon} className="absolute h-5 my-3.5 mx-4" />
            <input
              className="w-full border-gray-300 border py-4 px-12 rounded-md placeholder-black"
              placeholder="Search for mountains"
              maxLength="100"
              onChange={onChangeSearch}
              value={searchFilter.keyword}
            />
          </div>
          <div className="w-1/6 sm:w-2/6 flex justify-end">
            <SortMenuPopover
              sort={searchFilter.sort}
              onChangeSortOrder={onChangeSortOrder}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {mountains.map((mountain) => (
            <FeedItem mountain={mountain} key={mountain.id} />
          ))}
        </div>
        <div className="flex flex-col-reverse sm:flex-row w-full justify-center items-center">
          <div className="flex w-full sm:w-6/12 my-2 items-center justify-center sm:justify-start text-center">
            <Pagination activePage={1} totalRows={90} />
          </div>
          <div className="w-full sm:w-6/12 text-right my-2">
            <button className="w-full sm:w-auto px-24 py-4 bg-primary text-white rounded-md">
              Show next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
