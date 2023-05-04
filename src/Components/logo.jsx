import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Route, Link, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { IconButton, Button, Card, Grid, Item } from "@material-ui/core";
import "../CssAndThemes/logo.css";
import theme from "../CssAndThemes/theme";
import { Typography } from "@material-ui/core";
// import { MenuItem, Toolbar, AppBar, Typography } from "@mui/material";
const Logo = () => {
  //   const [videos, setVideos] = useState([]);
  //don't leave use effect with out the fucntion inside of it
  useEffect(() => {}, []);

  return (
    <MuiThemeProvider theme={theme}>       
      <Typography variant="h1" className="logo" >
        Dorchester Presbyterian Church
      </Typography>
      
    </MuiThemeProvider>
  );
};
export default Logo;
