export function paginate({
  data,
  page,
  perPage,
  url,
}: IPaginateParams): IPaginateResult {
  const offset = (page - 1) * perPage;
  const paginatedItems = data.slice(offset, page * perPage);

  const totalPage = Math.ceil(data.length / perPage);
  const nextPage = page < totalPage ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  const firstPage = 1;
  const lastPage = totalPage;

  const from = offset + 1;
  const to = offset + paginatedItems.length;

  const urlWithPage = (page: number): string => `${url}?page=${page}`;

  const pagination = {
    totalPage,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
    from,
    to,
    perPage,
    total: data.length,
    currentPage: page,
    hasPrevPage: page > 1,
    hasNextPage: page < totalPage,
    url: urlWithPage(page),
  };

  return {
    data: paginatedItems,
    pagination,
  };
}
