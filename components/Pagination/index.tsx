import React from "react";
import Link from "next/link";

import PaginationModel from "@/models/PaginationModel";
import { PAGE_PATTERN } from "@/consts/pagination";
import classNames from "classnames";

const Pagination: React.FC<any> = ({
  currentPage,
  totalPages,
  routePattern,
}: PaginationModel) => {
  const generateHref = (pageNumber: number) =>
    routePattern.replace(PAGE_PATTERN, pageNumber.toString());

  const renderNumbers = () => {
    let numbers = [];
    for (let i = 1; i < totalPages + 1; i++) {
      numbers.push(
        <Link
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
          href={generateHref(i)}
        >
          <button className="page-link">{i}</button>
        </Link>
      );
    }
    return numbers;
  };

  return (
    <>
      {totalPages > 1 && (
        <nav>
          <ul className="pagination">
            <Link
              className={classNames("page-item", {
                disabled: currentPage === 1,
              })}
              href={generateHref(currentPage - 1)}
            >
              <button className="page-link">Предыдущая</button>
            </Link>
            {renderNumbers()}
            <Link
              className={classNames("page-item", {
                disabled: currentPage === totalPages,
              })}
              href={generateHref(currentPage + 1)}
            >
              <button className="page-link">Следующая</button>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
