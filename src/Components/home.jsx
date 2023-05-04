import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Route, Link, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { IconButton, Button, Card, Grid, Item } from "@material-ui/core";

 import theme from "../CssAndThemes/theme";
 import {
    Typography,
    IconButton,
    Button,
    Card,
    Grid,
    Item,
  } from "@material-ui/core";
   import { Calendar } from ".";
const Home = () => {
    //   const [videos, setVideos] = useState([]);
      //don't leave use effect with out the fucntion inside of it
      useEffect(() => {}, []);
    
      return (
        <MuiThemeProvider theme={theme} >  
          <Card>
            <h1>Welcome to the Church by the Tracks – Dorchester Presbyterian.</h1>
            <p>Join us for worship.</p>
            <p>Our Sunday worship service is at 10:00 am.</p>
            <p> Come join us In-person or on-line.</p>
            </Card>
            <Calendar/>
        </MuiThemeProvider>
      );
    };
    export default Home;