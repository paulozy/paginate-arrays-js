import { paginate } from "../src/";

describe("paginate unit tests", () => {
  const data = Array.from({ length: 100 }, (_, i) => i + 1);

  it("should be possible paginate an array", () => {
    const { data: paginatedData, pagination } = paginate({
      data,
      page: 1,
      perPage: 10,
      url: "/api",
    });

    expect(paginatedData).toHaveLength(10);
    expect(pagination).toEqual({
      totalPage: 10,
      nextPage: 2,
      prevPage: null,
      firstPage: 1,
      lastPage: 10,
      from: 1,
      to: 10,
      perPage: 10,
      total: 100,
      currentPage: 1,
      hasPrevPage: false,
      hasNextPage: true,
      url: "/api?page=1",
    });
  });

  // it("should be possible paginate an array with custom page", () => {});
});
