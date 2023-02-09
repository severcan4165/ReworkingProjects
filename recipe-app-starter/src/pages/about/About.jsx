import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
   
      <div className="section2">
        <div id="contact" className="contact">
          <div className="contact-container">
            <h1>Contact Adress</h1>
            <p>Email Adress: salihsevercann@gmail.com</p>
            <br />
            <Link
              className="linkedin"
              to="https://www.linkedin.com/in/ahmet-salih-severcan"
            >
              Linkedin Adress: https://www.linkedin.com/in/ahmet-salih-severcan
            </Link>
          </div>
        </div>
      </div>
  
  );
};

export default About;
