/* eslint-disable react-hooks/exhaustive-deps */
import { usePagination } from '@hooks';
import React from 'react';

import { PaginationButton } from './PagiationButton.tsx';

interface PaginationProps {
  totalPages?: number;
  currentPage?: number;
  onPageSelect: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages = 100,
  currentPage = 1,
  onPageSelect
}) => {
  const [page, setPage] = React.useState(currentPage);
  const firstPage = 1;

  const pageList = usePagination({ firstPage, page, totalPages });
  React.useEffect(() => {
    onPageSelect(page);
  }, [page]);

  return (
    <div className="flex items-center justify-center gap-2 py-10 ">
      <PaginationButton
        onClick={() => setPage((prevState) => (prevState - 1 < firstPage ? 1 : prevState - 1))}
      >
        Prev
      </PaginationButton>

      {!pageList.includes(firstPage) && (
        <PaginationButton onClick={() => setPage(1)}>{firstPage}</PaginationButton>
      )}
      {!pageList.includes(firstPage) && <PaginationButton>...</PaginationButton>}

      <div className="flex gap-2 overflow-hidden">
        {pageList.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            className={`${page === pageNumber ? 'border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary' : ''}`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </PaginationButton>
        ))}
      </div>

      {!pageList.includes(totalPages) && <PaginationButton>...</PaginationButton>}
      {!pageList.includes(totalPages) && (
        <PaginationButton onClick={() => setPage(totalPages)}>{totalPages}</PaginationButton>
      )}

      <PaginationButton
        onClick={() =>
          setPage((prevState) => (prevState + 1 > totalPages ? totalPages : prevState + 1))
        }
      >
        Next
      </PaginationButton>
    </div>
  );
};
