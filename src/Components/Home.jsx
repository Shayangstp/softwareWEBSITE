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
import pic from "../assets/pic.png";
import { styled } from "@mui/material/styles";
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
      padding: "0",
      border: "1px solid red",
      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        height: "auto",
      },
    },
    // media: {
    //   maxWidth: "50%",
    //   height: "400px",
    //   [theme.breakpoints.down("lg")]: {
    //     maxWidth: "100%",
    //     height: "auto",
    //   },
    // },
    // content: {
    //   maxWidth: "60%",
    //   marginTop: "50px",
    //   marginLeft: "20px",
    //   paddingLeft: "10px",
    //   [theme.breakpoints.down("lg")]: {
    //     maxWidth: "100%",
    //     height: "auto",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   },
    // },

    // contactContainer: {
    //   marginTop: "30px",
    // },

    // contact: {
    //   marginLeft: "10px",
    //   textDecoration: "none",
    //   color: isDarkMode ? "#fff" : "#333",
    //   "&:hover": {
    //     opacity: 0.8,
    //     transform: "scale(1.2)",
    //   },
    // },

    // btnContainer: {
    //   marginTop: "20px",
    // },
  }));

  // const CustomBox = styled(Box)({
  //   width: "95%",
  //   boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.6)",
  //   margin: "20px auto ",
  // });

  const classes = useStyles();

  return (
    <div>
      <Box
        className={classes.about}
        sx={{ background: isDarkMode ? "#333" : "#fff" }}
      >
        <CardContent className={classes.content}>
          <Typography color="text.secondary">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="h5" component="div" fontSize={30}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography gutterBottom color="text.secondary">
            Lorem, ipsum.
          </Typography>
          <Typography
            variant="body1"
            className={classes.text}
            color="text.secondary"
          >
            A passionate and dedicated software engineer who loves programming,
            working with lates technology , learning new tech and building
            awesome things. I was born on February 1995 in Tehran,Iran .I
            studied industrial engineering at Qazvin azad university but as soon
            as i met programming i start learning on my own and undrstand how
            much i love it . I can speak Persian (native) and also English
            (professional working proficiency).
          </Typography>
          <Box className={classes.btnContainer}>
            <Button variant="outlined" sx={{ margin: "10px" }}>
              Demo
            </Button>
            <Button variant="outlined">Read More</Button>
          </Box>
          <div className={classes.contactContainer}>
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
          </div>
        </CardContent>
      </Box>
      <Card
        className={classes.root}
        sx={{ background: isDarkMode ? "#222" : "#d5ded7" }}
      >
        <CardMedia
          component="img"
          alt="software"
          height="140px"
          image={pic}
          className={classes.media}
        />
      </Card>
    </div>
  );
};

export default Home;
