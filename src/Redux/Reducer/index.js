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
    default:
      return { ...state };
  }
};
