const SET_NEWS_DATA = "SET_NEWS_DATA";

const initialState = {
  newsData: {},
};

export const newsReducer = (state = initialState, action = {}) => {
  console.log("NewsReducer", action.response);
  switch (action.type) {
    case SET_NEWS_DATA: {
      console.log("NewsReducer", action.response);
      return { ...state, newsData: action.response };
    }
    /* case HANDLE_INPUT_CHANGE: {
      let data = {};
      data = JSON.parse(JSON.stringify(state.chartData));
      let { dataId, elementId, newValue } = action.payload;
      data[dataId].elements[elementId].value = newValue;
      console.log("From Reducer", { dataId, elementId, newValue }, data);
      return { ...state, chartData: data };
    } */
    default:
      return { ...state };
  }
};
