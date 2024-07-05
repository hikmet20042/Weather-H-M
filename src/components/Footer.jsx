import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div class="footer">
      <div className="social_media">
        <a href="https://instagram.com/us3rhikmet" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/hikmet20042" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://facebook.com/hikmet.mli" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
      <div className="copyright">&#169; Designed by Hikmat Mammadli</div>
    </div>
  );
};

export default Footer;
