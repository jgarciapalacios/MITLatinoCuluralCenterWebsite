import React from "react";
import "./Footer.css";
import general from "../data/general.json";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <h4 className="footer-heading">About the {general.fullName}</h4>
        <p className="footer-text">{general.about}</p>
      </div>

      <div className="footer-connect">
        <h4 className="footer-heading">Connect</h4>
        <div className="footer-connect-content">
          <p className="footer-text">Visit our</p>
          <a
            href={general.linkTree}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Linktree
          </a>
          <p className="footer-text">
            for all our links and contact information
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 {general.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
