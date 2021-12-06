import axios from "axios";
import { config } from "../../config/config";
import { groupByPublisher } from "../../utils/parsingResponse";
const SET_NEWS_DATA = "SET_NEWS_DATA";

export const setNewsData = (actionType, response) => {
  console.log("Action", actionType, response);
  return {
    type: actionType,
    response: response,
  };
};

export const fetchNewData = () => {
  return (dispatch) => {
    axios
      .get(config.newsAPI.url)
      .then((response) => {
        dispatch(
          setNewsData(
            SET_NEWS_DATA,
            groupByPublisher(JSON.parse(JSON.stringify(response.data)))
          )
        );
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};
