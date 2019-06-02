import React, { Fragment } from 'react';
import ReactPaginate from "react-paginate"
import HomeThread from "../../../components/Thread/HomeThread"

const HomeThreads = ({ threads , handlePageChange, pageCount, currentPage}) =>
  <Fragment>
    {threads.map(thread =><HomeThread thread={thread} key={thread.id}/>
    )}

    <div className="row justify-content-center my-5">
      
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        disabledClassName="disabled"
        nextClassName="page-link"
        breakClassName="page-link"
        onPageChange={handlePageChange}
        pageCount={pageCount}
        forcePage={currentPage}
      />
    </div>
  </Fragment>;

export default HomeThreads;
