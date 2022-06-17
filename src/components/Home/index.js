import React, { useState } from "react";

import Grid from "@mui/material/Grid";

import Cards from "../Cards";
import movies from "../../data";
// import "..src/App.css";

import { useStyles } from "./style";
import { SevereColdRounded } from "@mui/icons-material";

const Home = () => {
  const classes = useStyles();

  const [sortedMovies, setSortedMovies] = useState(movies);

  const handleLikes = (index) => {
    let updateMovies = [...sortedMovies];

    updateMovies[index].likes += 1;

    // sorts movies in order of highest likes
    updateMovies.sort((a, b) => (a.likes < b.likes ? 1 : -1));
    setSortedMovies(updateMovies);
  };

  return (
    <Grid container className={classes.container}>
      {sortedMovies.map((first, second) => (
        <Cards
          value={console.log(first)}
          secon={console.log(second)}
          key={second}
          imgSrc={first.image}
          onClick={() => {
            handleLikes(second);
          }}
          count={first.likes}
          title={first.title}
        />
      ))}
    </Grid>
  );
};

export default Home;
