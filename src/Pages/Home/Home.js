import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CustomeButton from "../../Components/Button";
import { fetchNewData } from "../../Redux/Action";
/* import loader from "../../assets/loader.gif";
 */ const Home = () => {
  const dispatch = useDispatch();
  const { newsData } = useSelector((state) => state.newsReducer);
  useEffect(() => {
    dispatch(fetchNewData("SET_NEWS_DATA"));
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={3}
      className="layout align-center"
    >
      <Grid item xs={12} className="publisher-header home-header">
        Publisher List
      </Grid>
      {JSON.stringify(newsData) !== "{}" ? (
        Object.keys(newsData).map((publisher, key) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CustomeButton
                publisher={publisher}
                handleClick={() => {}}
                key={key}
              />
            </Grid>
          );
        })
      ) : (
        <div>"Fetching server data ....."</div>
      )}
    </Grid>
  );
};

export default Home;
