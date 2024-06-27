import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        borderRadius: 0,
        border: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: "white",
        background: "black",
        padding: "15px",
      }}
      elevation={0}
    >
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: "16px",
            }}
          >
            &copy; Kon Ferry 2024 All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="https://www.kornferry.com/content/dam/kornferry/docs/Terms-of-Use-011812v2.pdf"
              color="inherit"
              sx={{ marginRight: "16px", textDecoration: "none" }}
            >
              Terms
            </Link>
            <Link
              href="https://cdn.kornferry.com/privacy/en-gb/privacy.pdf"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              Privacy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Footer;
