import React from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

const Pagination = ({ activePage, onChangePage, totalRows }) => {
  const pages = Math.ceil(totalRows / 10);
  const pagesArray = Array.from(Array(pages).keys());
  return (
    <div className="flex flex-row">
      {pagesArray.map((page) => (
        <button
          className={classNames(
            "flex justify-center border border-primary px-4 py-2 text-sm",
            activePage === page + 1
              ? "text-primary border-primary"
              : "border-textGray"
          )}
          key={page}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  onChangePage: PropTypes.func,
  totalRows: PropTypes.number,
};
export default Pagination;
