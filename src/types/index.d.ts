interface IPaginateParams {
  page: number;
  perPage: number;
  data: unknown[];
  url: string;
}

interface IPaginateResult {
  data: unknown[];
  pagination: {
    totalPage: number;
    nextPage: number | null;
    prevPage: number | null;
    firstPage: number;
    lastPage: number;
    from: number;
    to: number;
    perPage: number;
    total: number;
    currentPage: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    url: string;
  };
}
