export const groupByPublisher = (resposne) => {
  return groupBy(resposne, (data) => data.PUBLISHER);
};

const groupBy = (list, keyGetter) => {
  const map = {};
  list.forEach((item, idx) => {
    const key = keyGetter(item);
    const collection = map[key];
    if (!collection) {
      map[key] = [item];
    } else {
      collection.push(item);
    }
  });
  return map;
};
