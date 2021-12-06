export const groupByPublisher = (resposne) => {
  /*   let newsData = resposne;
  let groupedByPublished;
  newsData.map((item, key) => {
    console.log(item);
    if (groupedByPublished[item.PUBLISHER]) {
      let tempArray = [];
      tempArray = { ...groupedByPublished[item.PUBLISHER] };
      tempArray.push(item);
      groupedByPublished[item.PUBLISHER] = tempArray;
    } else {
      groupedByPublished[item.PUBLISHER] = item;
    }
  });
  console.log("Reuslt Value", groupedByPublished);
 */

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
