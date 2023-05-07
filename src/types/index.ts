export interface IPaginateParams {
  page: number;
  perPage: number;
  data: unknown[];
  url: string;
}

export interface IPaginateResult {
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

export interface ICursorPaginateParams {
  data: any[];
  perPage: number;
  identifier: string | number;
  after?: string | number;
  before?: string | number;
}

export interface ICursorPaginateResult {
  data: any[];
  pagination: {
    hasPrevPage: boolean;
    hasNextPage: boolean;
    startCursor: string | number;
    endCursor: string | number;
    totalPages: number;
  };
}
