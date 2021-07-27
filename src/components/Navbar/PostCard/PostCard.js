import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({
  title,
  content,
  author,
  authorId,
  postId,
  handlePostRemove,
  date,
}) {
  const classes = useStyles();

  return (
    <Card key={postId} className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="p" color="textSecondary" component="p">
            {authorId}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {`Created by ${author} at ${date}`}
          </Typography>
          <Typography gutterBottom variant="h2" component="h2">
            {`${title}`}
          </Typography>
          <Typography variant="p" color="textPrimary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={(postId, authorId) => handlePostRemove(postId, authorId)}
          size="small"
          color="primary"
        >
          Remove
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
