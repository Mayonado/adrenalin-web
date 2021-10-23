import React from "react";
import PropTypes from "prop-types";
import { classNames } from "utils";

const Pagination = ({ activePage, onChangePage, totalRows }) => {
  const pages = Math.ceil(totalRows / 10); //
  const pagesArray = Array.from(Array(pages).keys());

  const paginationClasses = (page) =>
    classNames(
      "flex justify-center border-t border-r border-b px-7 py-4 text-sm first:rounded-l last:rounded-r first:border-l",
      activePage === page
        ? "text-primary border-primary border-r"
        : "border-textGray"
    );
  return (
    <div className="flex flex-row">
      {pagesArray.map((pageIndex) => {
        const page = pageIndex + 1;
        if (pageIndex === 4) {
          return (
            <button className={paginationClasses(page)} key={page}>
              ...
            </button>
          );
        }
        if (pageIndex < 3) {
          return (
            <button className={paginationClasses(page)} key={page}>
              {page}
            </button>
          );
        }
        if (pagesArray.length === page) {
          return (
            <button className={paginationClasses(page)} key={page}>
              {page}
            </button>
          );
        }
      })}
    </div>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number,
  onChangePage: PropTypes.func,
  totalRows: PropTypes.number,
};
export default Pagination;
