interface UsePaginationProps {
  firstPage: number;
  page: number;
  totalPages: number;
}

export const usePagination = ({ firstPage, page, totalPages }: UsePaginationProps) => {
  const pagesArray: number[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < totalPages + 1; i++) {
    pagesArray.push(i);
  }

  const pagesSlice = pagesArray.slice(page - 3 < 1 ? 0 : page - 3, page + 2);

  const getSliceOfPage = () => {
    if (pagesSlice.includes(firstPage)) {
      return pagesArray.slice(0, page + 2);
    }
    return pagesSlice;
  };

  return getSliceOfPage();
};
