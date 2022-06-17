import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import like from "../../movieposters/like.jpg";

import { useStyles } from "./style";

const Cards = (props) => {
  const classes = useStyles();

  const { imgSrc, imgAlt, title, onClick, count } = props;
  return (
    <Grid container item className={classes.cardCon} xs={12} sm={3}>
      <Grid item xs={12} className={classes.imgCon}>
        <img src={imgSrc} alt={imgAlt} className={classes.img} />
      </Grid>
      <Grid item xs={12}>
        <Grid item className={classes.textCon}>
          <Typography className={classes.count}> {count} </Typography>
          <Button onClick={onClick}>
            <img src={like} alt="like button" className={classes.likeBtn} />
          </Button>
          <Typography className={classes.text}> {title} </Typography>
        </Grid>
        <Typography className={classes.price}>
          {" "}
          price: #{100 * count}.00{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Cards;
