import React, { useState } from "react";
import "./Pagination.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export function Pagination(props) {
  const { actualpage } = props;
  const [page, setPage] = useState(parseInt(actualpage) || 1);
  const handleChangePagination = (value) => {
    setPage(value);
    props.PaginationValue(value);
  };
  return (
    <div className="pagination_container">
      {page !== 1 ? (
        <>
          <p onClick={() => handleChangePagination(page - 1)}>
            <AiOutlineArrowLeft />
          </p>
          <p onClick={() => handleChangePagination(page - 1)}>{page - 1}</p>
        </>
      ) : (
        ""
      )}
      <p className="active">{page}</p>
      <p onClick={() => handleChangePagination(page + 1)}>{page + 1}</p>
      <p onClick={() => handleChangePagination(page + 2)}>{(page + 2)}</p>
      <p onClick={() => handleChangePagination(page + 1)}>
        <AiOutlineArrowRight />
      </p>
    </div>
  );
}
