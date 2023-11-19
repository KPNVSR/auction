import React from 'react';
import './foot.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/YUVARAJMORLA" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/@YuvarajMorla_IN" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/yuvaraj-morla-14my" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-center">
        <p>&copy; 2023 AuctionSphereX. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <Link to="/contact">
          <FaEnvelope />
        </Link>
        <p>Get in touch</p>
      </div>
    </footer>
  );
}

export default Footer;
