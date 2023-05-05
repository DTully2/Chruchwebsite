import React from 'react';
import { Calendar, Socials } from ".";
import "../CssAndThemes/footer.css";

const Footer = () => (
  <div className="footer">
    <div>
    <div className="footer-content">
    
    <div className="sub">
    <Socials> </Socials>
    <Calendar />
    </div>
    </div>
    </div>
  </div>
);

export default Footer;
