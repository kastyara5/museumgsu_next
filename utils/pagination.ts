import range from "lodash/range";

export const getPagesCount = (total: number, countPerPage: number) =>
  Math.ceil(total / countPerPage);

export const getPossiblePageNumbers = (total: number, countPerPage: number) =>
  range(getPagesCount(total, countPerPage)).map((page: number) => page + 1);

export const getPossibleRoutes = (
  routePrefixes: string[],
  total: number,
  countPerPage: number
) =>
  getPossiblePageNumbers(total, countPerPage).map(
    (pageNumber: number) => `/${routePrefixes.join("/")}/${pageNumber}`
  );
