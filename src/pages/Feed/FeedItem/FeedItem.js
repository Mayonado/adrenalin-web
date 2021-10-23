import React from "react";
import PropTypes from "prop-types";

const FeedItem = ({ mountain }) => {
  return (
    <div className="w-full" key={mountain.id}>
      <div className="my-1">
        <img src={mountain.img} className="w-full" />
      </div>
      <div className="my-1">
        <div className="font-bold text-lg my-2">{mountain.title}</div>
        <div className="text-sm text-textGray my-2">{mountain.title_long}</div>
      </div>
    </div>
  );
};

FeedItem.propTypes = {
  mountain: PropTypes.object,
  mountainIndex: PropTypes.number,
};

export default FeedItem;
