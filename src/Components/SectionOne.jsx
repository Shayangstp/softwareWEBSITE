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
import video1 from "../assets/section-2.mp4";
// import video1Dark from "../assets/section-1-dark.mp4";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { darkTheme, theme } from "./Theme";

const SectionOne = ({ isDarkMode }) => {
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

    // demoBtn: {
    //   marginRight: theme.spacing(1),
    //   backgroundColor: "#4CAF50",
    //   color: "#FFFFFF",
    //   "&:hover": {
    //     backgroundColor: "#388E3C",
    //   },
    // },

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
      <Box className={classes.video1}>
        <video src={video1} width="600" height="500" autoplay="true" loop />
      </Box>

      <CardContent className={classes.content}>
        <Typography
          sx={{ marginBottom: "10px", color: isDarkMode ? "#fff" : "#111" }}
        >
          just Do it
        </Typography>
        <Typography
          sx={{
            color: isDarkMode ? "#fff" : "#111",
            marginBottom: "10px",
            fontWeight: "bolder",
            fontSize: "42px",
          }}
        >
          Lorem, ipsum dolor
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          molestias nihil totam quos blanditiis et omnis, autem sint
          necessitatibus repudiandae numquam neque assumenda nemo maiores.
          Repellat atque sed minima quisquam. Veniam dolorum voluptatibus sed
          cupiditate, sint, porro explicabo delectus nesciunt dignissimos
          asperiores magnam? Dolor, laboriosam! Nihil, sapiente pariatur?
          Dignissimos eveniet autem illum at molestias saepe dolorum modi quae
          tenetur eaque quia soluta hic dolorem fuga officia, quisquam
          voluptatibus dicta explicabo incidunt repudiandae inventore in
          consequuntur. Aspernatur quasi eum sequi tempora!
        </Typography>
        <Box className={classes.btnContainer}>
          <Button
            variant="text"
            size="large"
            sx={{
              color: isDarkMode ? "#fff" : "#111",
              borderColor: isDarkMode ? "#fff" : "#111",
              border: isDarkMode ? "1px dotted #333" : "1px dotted #fff",
              "&:hover": {
                borderColor: isDarkMode ? "#fff" : "#111",
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </CustomBox>
  );
};

export default SectionOne;
