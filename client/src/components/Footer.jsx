import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/brittanyowen" target="_blank">
        <img
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
          alt="GitHub Logo"
          rel="no referrer"
          />
      </a>
          &copy; Brittany Owen
      <a href="https://www.linkedin.com/in/bnowen/" target="_blank">
        <img
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
          alt="LinkedIn Logo"
          rel="no referrer"
        />
      </a>
    </div>
  );
};

export default Footer;
