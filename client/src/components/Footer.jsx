import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      &copy; Brittany Owen
      <a href="https://github.com/brittanyowen" target="_blank">
        <img
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
          alt="GitHub Logo"
        />
      </a>
      <a href="https://www.linkedin.com/in/bnowen/" target="_blank">
        <img
          src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
          alt="LinkedIn Logo"
        />
      </a>
    </div>
  );
};

export default Footer;
