import "./css/about.css";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";

export default function About() {
  return (
    <div className="about">
      <div className="header">
        <h1>Hi, I am Hikmat!</h1>
      </div>
      <div className="info">
        <p>
          I am passionate and detail-oriented Front-End Developer with
          experience in building responsive, user-friendly websites and web
          applications.
        </p>
        <p>
          I am proficient in HTML, CSS, JavaScript. I am skilled in translating
          design mockups into fully functional, high-performance code.
        </p>
        <p>
          I am good at collaborating with cross-functional teams to deliver
          seamless user experiences and constantly staying updated with the
          latest web development trends and technologies.
        </p>
      </div>
      <div className="social_media">
        <a href="https://instagram.com/hikmat.mammadli" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/hikmet20042" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://facebook.com/hikmet.mli" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
    </div>
  );
}
