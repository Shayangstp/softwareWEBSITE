import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SampleVideo from "../assets/Sample-MP4.mp4";
import ReactPlayer from "react-player";

import { darkTheme, theme } from "./Theme";

const Clip = () => {
  const useStyles = makeStyles(() => ({
    video: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "55%",
      height: "470px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Box className={classes.video}>
        <ReactPlayer
          url={SampleVideo}
          width="100%"
          height="100%"
          loop
          controls
        />
      </Box>
    </div>
  );
};

export default Clip;
