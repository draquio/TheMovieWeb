import React, { useState } from "react";
import "./Pagination.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Pagination() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();
  const handleChangePagination = (value) => {
    navigate(`?page=${value}`);
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
      <p onClick={() => handleChangePagination(page + 1)}>
        <AiOutlineArrowRight />
      </p>
    </div>
  );
}
