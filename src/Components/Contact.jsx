import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  colors,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { makeStyles } from "@mui/styles";

const Contact = ({ isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const useStyles = makeStyles(() => ({
    contactContainer: {
      marginTop: "10px",
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
  }));

  const classes = useStyles();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography
          variant="h4"
          align="center"
          mb={2}
          sx={{ color: isDarkMode ? "#fff" : "#000" }}
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
            sx={{
              borderColor: isDarkMode ? "#fff" : "#111",
              color: isDarkMode ? "#fff" : "#111",
            }}
          />
          <Button
            variant="outlined"
            size="large"
            type="submit"
            sx={{
              mt: 2,
              width: "100%",
              color: isDarkMode ? "#fff" : "#111",
              borderColor: isDarkMode ? "#fff" : "#111",
              "&:hover": {
                borderColor: isDarkMode ? "#fff" : "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
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
    </Box>
  );
};

export default Contact;
