import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, theme } from "./Components/Theme";
import DarkModeBtn from "./Components/DarkModeBtn";
import Home from "./Components/Home";
import Clip from "./Components/Clip";
import Contact from "./Components/Contact";
import SectionOne from "./Components/SectionOne";
import Footer from "./Components/Footer";
import { Grid } from "@mui/material";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  document.body.style.margin = 0;
  document.body.style.padding = 0;
  document.body.style.width = "100vw";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <Grid container sx={{ overflowX: "hidden" }}>
        <Grid xs={12} sx={{ marginTop: "20px", marginBottom: "20px" }}>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px" }}>
          <Home isDarkMode={isDarkMode} />
        </Grid>
        <Grid xs={12} sx={{ marginBottom: "60px" }}>
          <Clip />
        </Grid>
        <Grid xs={12} sx={{ marginBottom: "40px" }}>
          <SectionOne isDarkMode={isDarkMode} />
        </Grid>
        <Grid
          xs={12}
          sx={{
            background: isDarkMode ? "#5d5e5e" : "#f2e0bf",
            width: "100%",
            marginRight: "20px",
          }}
        >
          <Contact isDarkMode={isDarkMode} />
        </Grid>
        <Grid
          xs={12}
          sx={{
            background: isDarkMode ? "#5d5e5e" : "#f2e0bf",
            width: "100%",
            marginRight: "20px",
          }}
        >
          <Footer isDarkMode={isDarkMode} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
