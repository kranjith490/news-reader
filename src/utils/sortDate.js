export const sortDate = (data) => {
  data.sort(function (a, b) {
    return new Date(b.TIMESTAMP) - new Date(a.TIMESTAMP);
  });
  return data;
};
