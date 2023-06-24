import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, theme } from "./Components/Theme";
import DarkModeBtn from "./Components/DarkModeBtn";
import Home from "./Components/Home";
import { Grid } from "@mui/material";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <Grid container>
        <Grid
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
            background: isDarkMode ? "#333" : "#fff",
          }}
        >
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Grid>
        {/* <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        </Routes> */}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
