export const filterSearch = (data, searchKey) => {
  let filterData = JSON.parse(JSON.stringify(data));
  console.log(
    "Search Result",
    filterData.filter((news) =>
      news.TITLE.toLowerCase().includes(searchKey.toLowerCase())
    )
  );
  return filterData.filter((news) =>
    news.TITLE.toLowerCase().includes(searchKey.toLowerCase())
  );
};
