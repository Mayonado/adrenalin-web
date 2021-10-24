import React from "react";
import mountainData from "feed/data.json";
import Layout from "hoc/Layout/Layout";
import { useGetIntId } from "utils";
import Nodata from "components/Nodata/Nodata";

import denali from "assets/images/denali.jpg";
import himalayas from "assets/images/himalayas.jpg";
import pakistan from "assets/images/pakistan.jpg";
import kilimanjaro from "assets/images/kilimanjaro.jpg";
import greece from "assets/images/greece.jpg";
import blanc from "assets/images/blanc.jpg";
import patagonia from "assets/images/patagonia.jpg";
import italy from "assets/images/italy.jpg";

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

const FeedDetails = () => {
  const mountainId = useGetIntId();
  const mountainArr = mountainData.filter((mt) => mt.id === mountainId);
  const mountainIndex = mountainData.findIndex((mt) => mt.id === mountainId);

  if (mountainArr.length <= 0) {
    return (
      <Layout>
        <Nodata />
      </Layout>
    );
  }

  const mountain = mountainArr[0];

  return (
    <Layout>
      <div className="flex flex-col gap-2 sm:gap-8 sm:flex-row justify-center sm:justify-start w-full">
        <div className="w-full sm:w-3/12 flex justify-center">
          <img
            src={bgImages[mountainIndex]}
            alt={mountain.slug}
            className="w-full"
          />
        </div>
        <div className="w-full sm:w-5/12 my-2">
          <div className="font-black text-4xl py-2">{mountain.title}</div>
          <div className="py-2">{mountain.title_long}</div>
        </div>
      </div>
    </Layout>
  );
};
export default FeedDetails;
