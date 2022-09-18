import React from "react";
import './style.css';
import backArrow from '../../assets/images/back-arrow.svg';
import forwardArrow from '../../assets/images/forward-arrow.svg'

const Pagination = ({ setPageNumber, pageNumber, totalPages, totalCount }) => {
  return (
    <div className="movieHeader">
      <div className="resultsCount">
        {totalCount} Results found
      </div>
      <div className="pagination">
        Page {pageNumber} of {totalPages}
        <button
          className="button"
          disabled={pageNumber === 1}
          onClick={() => {
            setPageNumber((currPage) => currPage - 1);
          }}
        >
          <img src={backArrow}></img>
        </button>{" "}
        <button
          className="button"
          onClick={() => {
            setPageNumber((currPage) => currPage + 1);
          }}
        >
          <img src={forwardArrow}></img>
        </button>
      </div>
    </div>
  )
}

export default Pagination;