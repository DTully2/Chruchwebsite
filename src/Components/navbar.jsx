import React, { useState, useEffect } from "react";

import {  Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
// import { IconButton, Button, Card, Grid, Item } from "@material-ui/core";
import theme from "../CssAndThemes/theme";
import {
  MenuItem,
  Toolbar,
  AppBar,
  Typography,
  Menu,
  
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState([]);
  const [popupState, setOpen] = useState(false);
  //don't leave use effect with out the fucntion inside of it
  useEffect(() => {}, []);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <MuiThemeProvider theme={theme} >
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar variant="dense">
          <Typography style={{ flex: 1, fontWeight: "bold" }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
             LOGO Image
            </Link>
          </Typography>    
          <MenuItem component={Link} to="/">
            Welcome
          </MenuItem>
          <Typography style={{padding:"1%"}}>|</Typography>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <p variant="contained" {...bindTrigger(popupState)}>
                  Praise and Worship Services
                </p>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Rev Jon Talks</MenuItem>
                  <MenuItem component={Link} to="/youtubefetch" onClick={popupState.close}>DPC Youtube </MenuItem>                  
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Typography style={{padding:"1%"}}>|</Typography>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <p variant="contained" {...bindTrigger(popupState)}>
                  DPC Activites
                </p>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem component={Link} to="" onClick={popupState.close}>Events </MenuItem>                  
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Typography style={{padding:"1%"}}>|</Typography>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <p variant="contained" {...bindTrigger(popupState)}>
                  OutReach
                </p>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Dorchester Community</MenuItem>
                  <MenuItem component={Link} to="" onClick={popupState.close}>Presbyterian Camp Links </MenuItem>                  
                </Menu>
              </React.Fragment>
            )}
          </PopupState>   

          <Typography style={{padding:"1%"}}>|</Typography>
          <MenuItem component={Link} to="/contactcomponents">
            Donate 
          </MenuItem>
          <Typography style={{padding:"1%"}}>|</Typography>

          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <p variant="contained" {...bindTrigger(popupState)}>
                  Contact Us
                </p>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem component={Link} to="/contactcomponents" onClick={popupState.close}>History</MenuItem>
                  <MenuItem component={Link} to="" onClick={popupState.close}>Photo Gallery </MenuItem>                  
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
                
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};
export default NavBar;
