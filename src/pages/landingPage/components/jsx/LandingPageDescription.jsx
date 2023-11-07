import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../css/LandingPageDescription.css";

const LandingPageDescription = () => {
  return (
    <>
      <div className="landingPage-description">
        Introducing Ratventure - the ultimate maze-solving extravaganza! Join
        our fearless and furry protagonist as they embark on a thrilling journey
        through a labyrinth of twists, turns, and cheesy delights. Ratventure is
        a whimsical and entertaining full stack application that brings the
        classic <b>Rat In A Maze</b> problem to life like never before. Prepare
        to be captivated by the gripping challenges that await our brave rat, as
        they navigate through mind-boggling puzzles, treacherous obstacles, and
        delectable morsels of cheese at every corner. With its intuitive
        interface and seamless functionality, Ratventure offers an immersive
        experience that will keep players on the edge of their seats. With its
        user-friendly controls, players of all ages can effortlessly navigate
        the maze and join in the fun. With customizable difficulty levels,
        Ratventure caters to both casual players seeking a laid-back experience
        and master maze solvers hungry for an intense challenge. So, are you
        ready to embark on a wild and whimsical Ratventure? Get ready to push
        your maze-solving skills to the limit, indulge in cheesy adventures, and
        become the ultimate rat conqueror.
      </div>
      <div className="landingPage-button">
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ height: "50px" }}
        >
          Let the Ratventure begin!
        </Button>
      </div>
    </>
  );
};

export default LandingPageDescription;
