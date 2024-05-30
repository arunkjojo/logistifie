const pagination = (array_data, page_size = 4, page_number = 1) => {
  if (!Array.isArray(array_data)) {
    throw new TypeError("Expected an array for pagination");
  }
  const start = (page_number - 1) * page_size;
  const end = start + page_size;

  return array_data.slice(start, end);
};
module.exports = pagination;
