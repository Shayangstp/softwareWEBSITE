import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = ({ isDarkMode }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: isDarkMode ? "#111" : "#ddd",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h5"
              color="textSecondary"
              sx={{ marginBottom: "10px" }}
            >
              SOFTWARENAME
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Just Do It | noPain noGain | lorem`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary">
              <span style={{ marginRight: "20px" }}>555-999-888</span>
              <span>555-999-777</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
