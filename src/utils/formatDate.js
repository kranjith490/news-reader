export const formatDate = (data) => {
  data.map((item) => {
    const date = new Date(item.TIMESTAMP);
    item.TIMESTAMP =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  });
  return data;
};
