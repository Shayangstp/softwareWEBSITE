import React from "react";
import {
  Stack,
  Typography,
  Button,
  Box,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import video1 from "../assets/section-1.mp4";
import video1Dark from "../assets/section-1-dark.mp4";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { darkTheme, theme } from "./Theme";

const Home = ({ isDarkMode }) => {
  document.body.style.overflow = "auto";

  const useStyles = makeStyles(() => ({
    about: {
      width: "50%",
      display: "flex",
      height: "480px",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
      },
    },
    media: {
      maxWidth: "50%",
      height: "400px",
      [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
        height: "auto",
      },
    },
    content: {
      maxWidth: "50%",
      marginTop: "50px",
      marginLeft: "40px",
      paddingLeft: "10px",
      [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      },
    },

    contactContainer: {
      marginTop: "30px",
    },

    contact: {
      marginLeft: "10px",
      textDecoration: "none",
      color: isDarkMode ? "#fff" : "#333",
      "&:hover": {
        opacity: 0.8,
        transform: "scale(1.2)",
      },
    },

    video1: {
      [theme.breakpoints.down("md")]: {
        marginTop: "30px",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    btnContainer: {
      marginTop: "40px",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "30px",
      },
    },
  }));

  const CustomBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    margin: "20px auto ",
  });

  const classes = useStyles();

  return (
    <CustomBox className={classes.about}>
      <CardContent className={classes.content}>
        <Typography
          sx={{ marginBottom: "10px", color: isDarkMode ? "#fff" : "#111" }}
        >
          softwareName
        </Typography>
        <Typography
          sx={{
            color: isDarkMode ? "#fff" : "#111",
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: "42px",
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          gutterBottom
          color="text.secondary"
          sx={{ marginBottom: "20px", color: isDarkMode ? "#fff" : "#111" }}
        >
          Lorem, ipsum.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: isDarkMode ? "#fff" : "#111" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          impedit nam aliquam, ab quas iure culpa? Possimus illum sit optio
          voluptatem officiis nam incidunt, nobis, in quos quod illo mollitia
          eius magni. Assumenda sed perspiciatis harum consequuntur sint iste
          quos magni obcaecati labore. Dicta laudantium culpa sequi tenetur quae
          at.
        </Typography>
        <Box className={classes.btnContainer}>
          <Button
            variant="contained"
            sx={{
              marginRight: "10px",
              backgroundColor: isDarkMode ? "#fff" : "#111",
              color: isDarkMode ? "#111" : "#fff",
              "&:hover": {
                background: isDarkMode ? "#ddd" : "#000",
              },
            }}
            size="large"
            className={classes.demoBtn}
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: isDarkMode ? "#fff" : "#111",
              borderColor: isDarkMode ? "#fff" : "#111",
              "&:hover": {
                borderColor: isDarkMode ? "#fff" : "#111",
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
      <Box className={classes.video1}>
        {!isDarkMode ? (
          <video src={video1} width="600" height="500" autoplay="true" loop />
        ) : (
          <video
            src={video1Dark}
            width="600"
            height="500"
            autoplay="true"
            loop
          />
        )}
      </Box>
    </CustomBox>
  );
};

export default Home;

{
  /* <div className={classes.contactContainer}>
<a href="#" className={classes.contact}>
  <GitHubIcon />
</a>
<a href="#" className={classes.contact}>
  <TelegramIcon />
</a>
<a href="#" className={classes.contact}>
  <InstagramIcon />
</a>
<a href="#" className={classes.contact}>
  <WhatsAppIcon />
</a>
<a href="#" className={classes.contact}>
  <LinkedInIcon />
</a>
</div> */
}
