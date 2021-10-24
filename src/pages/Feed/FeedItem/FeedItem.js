import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeedItem = ({ mountain }) => {
  return (
    <Link
      className="w-full"
      key={mountain.id}
      to={`/feed-details/${mountain.id}`}
    >
      <div className="my-1">
        <img src={mountain.img} className="w-full" alt={mountain.slug} />
      </div>
      <div className="my-1">
        <div className="font-bold text-lg my-2">{mountain.title}</div>
        <div className="text-sm text-textGray my-2">{mountain.title_long}</div>
      </div>
    </Link>
  );
};

FeedItem.propTypes = {
  mountain: PropTypes.object,
  mountainIndex: PropTypes.number,
};

export default FeedItem;
