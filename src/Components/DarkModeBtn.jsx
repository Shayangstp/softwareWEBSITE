import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Margin } from "@mui/icons-material";

const DarkModeBtn = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Button
      variant="outlined"
      onClick={toggleDarkMode}
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        border: "none",
      }}
    >
      {isDarkMode ? <LightModeIcon /> : <ModeNightIcon />}
    </Button>
  );
};

export default DarkModeBtn;
