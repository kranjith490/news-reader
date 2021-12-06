import { Card, CardContent, Link, Typography } from "@material-ui/core";

const NewsCard = ({ news }) => {
  const { TITLE, TIMESTAMP, ID, URL, CATEGORY, HOSTNAME } = news;
  return (
    <Link href={URL} target="_blank" className="card-click card-hover">
      <Card>
        <CardContent>
          <Typography variant="h5"> {TITLE} </Typography>
          <div className="divider" />
          <Typography> Last Modified : {TIMESTAMP}</Typography>
          <Typography>Hosted By: {HOSTNAME}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
