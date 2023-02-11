import React from "react";
import Link from "next/link";

import PaginationModel from "@/models/PaginationModel";

const Pagination: React.FC<any> = ({
  currentPage,
  totalPages,
  routePrefix,
}: PaginationModel) => {
  const renderNumbers = () => {
    let numbers = [];
    for (let i = 1; i < totalPages + 1; i++) {
      numbers.push(
        <Link
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
          href={`${routePrefix}/${i}`}
        >
          <button className="page-link">
            {i}
          </button>
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
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              href={`${routePrefix}/${currentPage - 1}`}
            >
              <button className="page-link">Предыдущая</button>
            </Link>
            {renderNumbers()}
            <Link
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              href={`${routePrefix}/${currentPage + 1}`}
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
