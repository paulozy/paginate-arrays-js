### paginate-arrays-js

`paginate-arrays-js` is a simple and easy-to-use NPM package that allows you to paginate your
array data in JavaScript/TypeScript projects. This package is flexible and can be used
with any data structure or framework.

## Installation

```bash
npm install paginate-arrays-js
```

## Usage Paginate Default

Import the `paginate` function from the `paginate-arrays-js` package:

```javascript
import { paginate } from "paginate-arrays-js";
```

## Parameters

The `paginate` function accepts an object with the following properties:

- `data`: The array of data to be paginated.
- `page`: The current page number.
- `perPage`: The number of items to be displayed per page.
- `url`: The base URL for the paginated resource.

## Return Value

The `paginate` function returns an object with the following properties:

- `data`: The paginated data.
- `pagination`: The pagination information.

## Example

```javascript
import { paginate } from "paginate-arrays-js";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  // ...
];

const currentPage = 1;
const itemsPerPage = 10;
const url = "/api/users";

const paginatedData = paginate({
  data,
  page: currentPage,
  perPage: itemsPerPage,
  url,
});

console.log(paginatedData);
```

This will return an object with paginated data and pagination information, like so:

```javascript
{
  data: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    // ...
  ],
  pagination: {
    totalPage: 5,
    nextPage: 2,
    prevPage: null,
    firstPage: 1,
    lastPage: 5,
    from: 1,
    to: 10,
    perPage: 10,
    total: 50,
    currentPage: 1,
    hasPrevPage: false,
    hasNextPage: true,
    url: '/api/users?page=1'
  }
}
```

You can then use the paginated data and the pagination object to display paginated content and
navigation in your application.

## Usage Cursor Pagination

Import the `cursorPaginate` function from the `paginate-arrays-js` package:

```javascript
import { cursorPaginate } from "paginate-arrays-js";
```

## Parameters

The `cursorPaginate` function accepts an object with the following properties:

- `data`: The array of data to be paginated.
- `identifier`: The unique identifier for the cursor pagination.
- `perPage`: The number of items to be displayed per page.
- `after`: The cursor for the next page (optional).
- `before`: The cursor for the previous page (optional).

## Return Value

The `cursorPaginate` function returns an object with the following properties:

- `data`: The paginated data.
- `pagination`: The pagination information.

## Example

```javascript
import { cursorPaginate } from "paginate-arrays-js";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
  // ...
];

const itemsPerPage = 10;
const identifier = "id";
const after = 1;

const paginatedData = cursorPaginate({
  data,
  identifier,
  perPage: itemsPerPage,
  after,
});

console.log(paginatedData);
```

This will return an object with paginated data and pagination information, like so:

```javascript
{
  data: [
    { id: 2, name: 'Jane' },
    // ...
  ],
  pagination: {
    totalPages: 5,
    hasPrevPage: true,
    hasNextPage: true,
    startCursor: 2,
    endCursor: 11,
  }
}
```

You can then use the paginated data and the pagination object to display paginated content and
navigation in your application.

## Contributing

If you'd like to contribute to the development of `paginate-arrays-js`, please feel free to submit
pull requests or report issues on the repository.

## License

`paginate-arrays-js` is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
