import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Routes } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Button,
  Card,
  Grid,
  Item,
} from "@material-ui/core";
import theme from "../CssAndThemes/theme";
import ContactUs from "./contactus";
import { fetchFromApi } from "../utils/fetchFromApi";


const ContactComponent = () => {
  const [videos, setVideos] = useState([]);
  //don't leave use effect with out the fucntion inside of it
  // useEffect(() => {
  //   fetchFromApi(`search?part=snippet&q=${}`)

  // }, []);
 
  return (   
    <MuiThemeProvider theme={theme} >

        <Typography variant="h4" style={{ padding: 30 }}>
         From Past to Present to Future
        </Typography>
        <Typography variant="h5" style={{ padding: 20 }}>
        The church is the people…

        </Typography>
        <Typography variant="subtitle1" style={{ padding: 20 }}>
        The song “Surely the Presence of the Lord Is in This Place” is based a promise from Jesus, “Where two or three are gathered together in my name, there I am in their midst” (Matthew 18:20).  It emphasizes the senses—feeling, hearing, touching, and seeing.   We can “feel the presence of the Lord—and hear the brush of the angel’s wings, and see glory on each face”. 
        </Typography>
        <Typography variant="subtitle1" style={{ padding: 20 }}>
        The song helps us get the emphasis right too.  We often talk about “the church on the corner” meaning a particular building.  The church is the people and where the church meets is in the building.  The only reference to the building is in the phrase “this place.”  The song shifts the focus to people, as in “each face” and “His children” and “two or three.”  It’s a special reminder to us all of the real meaning of the church.
        </Typography>
     
      
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iD2Q-S1tI0Y"
        title="YouTube video player"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ContactUs></ContactUs>
      
      </MuiThemeProvider >
  );
};
export default ContactComponent;
