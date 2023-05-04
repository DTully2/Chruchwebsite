import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faFoursquare,
} from "@fortawesome/free-brands-svg-icons";
import  "../CssAndThemes/socials.css";
import theme from "../CssAndThemes/theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
const  Socials =()=> {
  useEffect(() => {}, []);
  return (
    <MuiThemeProvider theme={theme}>
    <div className="social-container">
      <h3>Follow us and the Presbyterian Church in Canada</h3>
      <a
        href="https://www.youtube.com/channel/UC6VS_R2Qk9RmaJsByJ49KKQ/videos"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/DPC.on.ca/?epa=SEARCH_BOX/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/pcconnect" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/presbyterian_church_in_canada/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://foursquare.com/v/the-presbyterian-church-in-canada-national-offices/4b17f6baf964a52062ca23e3"
        className="foursquare social"
      >
        <FontAwesomeIcon icon={faFoursquare}  size="2x" />
      </a>
    </div>
    </MuiThemeProvider>
  );
};
export default Socials;