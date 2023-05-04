import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { MenuItem,Toolbar,AppBar,Typography } from "@mui/material";

//imports from components
import {
  NavBar,
  YoutubeComponent,
  ContactComponents,
  Themes,
  Logo,
  Home,
  Socials,
  Calendar,
} from "./Components";
import Theme from "./CssAndThemes/theme";

function App() {

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
        <Logo> </Logo>
        <NavBar ></NavBar>        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/youtubefetch" element={<YoutubeComponent />} />
          <Route path="/contactcomponents" element={<ContactComponents />} />
        </Routes>
        <Socials> </Socials>
       
      </div>
    </MuiThemeProvider>
  );
}

export default App;
