import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Grid, Typography, Link } from "@material-ui/core";
import NewsCard from "../../Components/newsCard";
import Search from "../../Components/Search";
import { sortDate } from "../../utils/sortDate";
import { formatDate } from "../../utils/formatDate";
import { filterSearch } from "../../utils/filterSearch";

const Publisher = () => {
  const { PublisherName } = useParams();
  const { newsData } = useSelector((state) => state.newsReducer);
  let [publisherNews, setPublisherNews] = useState(newsData[PublisherName]);
  const originalData = newsData[PublisherName];
  const navigate = useNavigate();

  useEffect(() => {
    let data = [];
    data = { ...newsData[PublisherName] };
    console.log("Selected News", data);
    data = sortDate(Object.values(data));
    data = formatDate(data);
    setPublisherNews(data);
    console.log("After Conversion", data);
  }, []);

  const handleReload = () => {
    navigate("/");
  };

  const handleSearch = (value) => {
    if (value.length == 0) {
      console.log("IF Search Key", value, originalData);
      setPublisherNews(originalData);
    } else {
      console.log("ELSE Search Key", value);
      const result = filterSearch(originalData, value);
      result.length !== 0
        ? setPublisherNews(result)
        : setPublisherNews({ message: "No news found for the search" });
    }
  };

  return (
    <Grid
      container
      alignItem="center"
      justifyContent="center"
      spacing="3"
      className="publisher-container"
    >
      <Grid item xs={12} className="align-center">
        <Typography variant="h5" className="publisher-header">
          News from {PublisherName}
        </Typography>
        <Search handleSearch={handleSearch} />
      </Grid>
      {JSON.stringify(publisherNews) !== "{}" ? (
        publisherNews.message ? (
          <Typography> {publisherNews.message} </Typography>
        ) : (
          publisherNews.map((news, key) => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <NewsCard key={key} news={news} />
              </Grid>
            );
          })
        )
      ) : (
        <Typography>
          Oops, No News Avaialble.Click{" "}
          <Link onClick={handleReload} className="cursor">
            home
          </Link>{" "}
          to publish
        </Typography>
      )}
    </Grid>
  );
};

export default Publisher;
