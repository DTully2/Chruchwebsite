import "./App.css";
import { Route, Routes } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
// import { MenuItem,Toolbar,AppBar,Typography } from "@mui/material";

//imports from components
import {
  NavBar,
  YoutubeComponent,
  ContactComponents,

  Logo,
  Home,
  Socials,

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
