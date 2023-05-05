import React, { useEffect } from "react";
// import axios from "axios";
// import { Route, Link, Routes } from "react-router-dom";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { IconButton, Button, Card, Grid, Item } from "@material-ui/core";
//  import theme from "../CssAndThemes/theme";

 import {  Card,    } from "@material-ui/core";
 import "../CssAndThemes/home.css";
const Home = () => {
    //   const [videos, setVideos] = useState([]);
      //don't leave use effect with out the fucntion inside of it
      useEffect(() => {}, []);
    
      return (
         
          <Card className="homeCard">
            <h1>Welcome to the Church by the Tracks – Dorchester Presbyterian.</h1>
            <p>Join us for worship.</p>
            <p>Our Sunday worship service is at 10:00 am.</p>
            <p> Come join us In-person or on-line.</p>
            <b/>
               <h2> When and where do we gather?</h2>
                <p> We gather for worship on Sunday mornings at 10:00 am. </p>
                <p> We would be joyed to have you join us!</p>
                <p> In person at <a href="https://www.google.com/maps/dir//1669+Richmond+St,+Dorchester,+ON+N0L+1G4/@43.0017755,-81.1556093,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x882e91f9fe132179:0x335a1c3660c339d2!2m2!1d-81.0702265!2d42.9904313!3e0 ">1669 Richmond St.</a> (north of Catherine St. by the tracks)</p>

            
            </Card>
          
        
      );
    };
    export default Home;