import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { darkTheme, theme } from "./Theme";
import DarkModeBtn from "../Components/DarkModeBtn";
import { Grid } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@material-ui/core";

function Header({ isDarkMode, toggleDarkMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? darkTheme.palette.background.default
      : theme.palette.background.default;
  }, [isDarkMode]);

  const navItem = {
    backgroundColor: isDarkMode ? "transparent" : "transparent",
    color: isDarkMode ? "#fff" : "#000",
    fontSize: "13px",
    marginTop: "10px",
  };

  const nameBtn = {
    backgroundColor: isDarkMode ? "transparent" : "transparent",
    color: isDarkMode ? "#fff" : "#000",
    fontSize: "24px",
  };

  const useStyles = makeStyles(() => ({
    headerBtn: {
      marginLeft: "10px",
      "&:hover": {
        opacity: 0.7,
      },
      textDecoration: "none",
    },

    navItem: {
      padding: "0px",
      margin: "0",
      "&:hover": {
        borderBottom: "1px dotted #fff",
      },
    },

    // navBar: {
    //   backgroundColor: scrollPosition > 0 && isDarkMode ? "#fff" : "#333",
    //   transition: "background-color 0.3s ease-in-out",
    // },

    drawerPaper: {
      backgroundColor: isDarkMode ? "#424242" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      width: "200px",
    },
  }));

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Stack
          className={classes.navBar}
          width="90vw"
          height="70px"
          direction="row"
          gap="20px"
          px="10px"
          justifyContent="space-between"
          alignItems="center"
          marginLeft="30px"
        >
          <Box>
            <Link to="/" className={classes.headerBtn}>
              <Typography
                sx={{
                  fontSize: { sm: "18px", md: "24px" },
                  backgroundColor: isDarkMode ? "transparent" : "transparent",
                  color: isDarkMode ? "#fff" : "#000",
                  marginBottom: "10px",
                  marginLeft: "70px",
                }}
              >
                SOFTWARENAME
              </Typography>
            </Link>
          </Box>

          <IconButton
            onClick={handleMenuToggle}
            sx={{
              display: { md: "none" },
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={showMenu}
            onClose={handleMenuToggle}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Box sx={{ marginLeft: "130px" }}>
                <DarkModeBtn
                  toggleDarkMode={toggleDarkMode}
                  isDarkMode={isDarkMode}
                />
              </Box>
              <Link to="/" className={classes.headerBtn}>
                <ListItem button>
                  <ListItemText
                    primary="Home"
                    style={navItem}
                    sx={{ textDecoration: "none" }}
                  />
                </ListItem>
              </Link>
              <Link to="/" className={classes.headerBtn}>
                <ListItem button>
                  <ListItemText
                    primary="Document"
                    style={navItem}
                    sx={{
                      listStyle: "none",
                    }}
                  />
                </ListItem>
              </Link>
              <Link to="/" className={classes.headerBtn}>
                <ListItem button>
                  <ListItemText primary="About" style={navItem} />
                </ListItem>
              </Link>
              <Link to="/" className={classes.headerBtn}>
                <ListItem button>
                  <ListItemText primary="Contact" style={navItem} />
                </ListItem>
              </Link>
              <Link to="/" className={classes.headerBtn}>
                <ListItem button>
                  <ListItemText primary="Demo" style={navItem} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Box
            className={classes.navItems}
            sx={{
              display: { xs: showMenu ? "flex" : "none", md: "flex" },
            }}
          >
            <Link to="/" className={classes.headerBtn}>
              <Button style={navItem}>Home</Button>
            </Link>
            <Link to="/" className={classes.headerBtn}>
              <Button style={navItem}>Document</Button>
            </Link>
            <Link to="/" className={classes.headerBtn}>
              <Button style={navItem}>About</Button>
            </Link>
            <Link to="/" className={classes.headerBtn}>
              <Button style={navItem}>Contact</Button>
            </Link>
            <Link to="/" className={classes.headerBtn}>
              <Button
                variant="contained"
                sx={{
                  fontSize: "13px",
                  marginTop: "10px",
                  backgroundColor: isDarkMode ? "#fff" : "#111",
                  color: isDarkMode ? "#111" : "#fff",
                  "&:hover": {
                    background: isDarkMode ? "#ddd" : "#000",
                  },
                }}
              >
                Demo
              </Button>
            </Link>
            <Box sx={{ marginLeft: "20px" }}>
              <DarkModeBtn
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;
