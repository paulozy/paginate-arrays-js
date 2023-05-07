import { randomUUID as uuid } from "node:crypto";

import { cursorPaginate } from "../src/";

describe("cursor paginate", () => {
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: uuid(),
    name: `User ${i}`,
  }));

  it("should be possible paginate an array with a cursor", () => {
    const perPage = 10;
    const identifier = "id";

    const { data: paginatedItems, pagination } = cursorPaginate({
      data,
      perPage,
      identifier,
    });

    expect(paginatedItems).toHaveLength(perPage);
    expect(pagination).toMatchObject({
      hasPrevPage: false,
      hasNextPage: true,
      startCursor: paginatedItems[0].id,
      endCursor: paginatedItems[paginatedItems.length - 1].id,
      totalPages: 10,
    });
  });

  it("should be possible paginate an array with a cursor and after", () => {
    const perPage = 10;
    const identifier = "id";
    const after = data[10].id;

    const { data: paginatedItems, pagination } = cursorPaginate({
      data,
      perPage,
      identifier,
      after,
    });

    expect(paginatedItems).toHaveLength(perPage);
    expect(pagination).toMatchObject({
      hasPrevPage: true,
      hasNextPage: true,
      startCursor: paginatedItems[0].id,
      endCursor: paginatedItems[paginatedItems.length - 1].id,
      totalPages: 10,
    });
  });

  it("should be possible paginate an array with a cursor and before", () => {
    const perPage = 10;
    const identifier = "id";
    const before = data[10].id;

    const { data: paginatedItems, pagination } = cursorPaginate({
      data,
      perPage,
      identifier,
      before,
    });

    expect(paginatedItems).toHaveLength(perPage);
    expect(pagination).toMatchObject({
      hasPrevPage: true,
      hasNextPage: true,
      startCursor: paginatedItems[0].id,
      endCursor: paginatedItems[paginatedItems.length - 1].id,
      totalPages: 10,
    });
  });

  it("should be possible paginate an array with a cursor and before and after", () => {
    const perPage = 10;
    const identifier = "id";
    const before = data[10].id;
    const after = data[5].id;

    const { data: paginatedItems, pagination } = cursorPaginate({
      data,
      perPage,
      identifier,
      before,
      after,
    });

    expect(paginatedItems).toHaveLength(perPage);
    expect(pagination).toMatchObject({
      hasPrevPage: true,
      hasNextPage: true,
      startCursor: paginatedItems[0].id,
      endCursor: paginatedItems[paginatedItems.length - 1].id,
      totalPages: 10,
    });
  });
});
