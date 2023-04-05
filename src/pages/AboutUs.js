import React from "react";
import "../components/css/home.css";

import image from "./images/logo.jpg";
import image1 from "./images/aim.png";
import image2 from "./images/vision.jpg";

export const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="about-us-textbox">
          <h2 className="about-us-title">Who we are?</h2>
          <p className="about-us-description">
            <ul>
              <li>
                We are a team dedicated to improving the diagnosis and treatment
                of diseases using modern technologies.
              </li>
              <li>
                Our mission is to provide reliable, accurate, and affordable
                healthcare solutions to people around the world, using the power
                of technology.
              </li>
              <li>
                We have developed a revolutionary new system for detecting and
                diagnosing diseases such as Jaundice, that is faster, more
                accurate, and more affordable than traditional methods.
              </li>
              <li>
                Thank you for choosing our Jaundice Detection System, and we
                hope that it will help you and your loved ones in the journey
                towards better health.
              </li>
            </ul>
          </p>
        </div>
        <div className="about-us-image">
        <img id="image" src={image} alt="about-us" style={{ width: "1000px", height: "2000px" }} />
        </div>
      </div>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="about-us-textbox">
          <h2 className="about-us-title">Our Aim</h2>
          <p className="about-us-description">
            <ul>
              <li>
                We aim to provide an accurate and reliable Jaundice Detection
                System that is fast, easy to use, and affordable for everyone.
              </li>
              <li>
                We are committed to improving the diagnosis and treatment of
                Jaundice through the use of modern technologies and innovative
                approaches.
              </li>
              <li>
                We believe that early detection of Jaundice can greatly improve
                patient outcomes, and we are dedicated to providing a system
                that can help healthcare professionals and individuals detect
                the condition as early as possible.
              </li>
              <li>
                Our goal is to make the detection of Jaundice accessible to
                people all around the world, including those in underserved and
                remote areas.
              </li>
            </ul>
          </p>
        </div>
        <div className="about-us-image">
        <img id="image" src={image1} alt="about-us" style={{ width: "1000px", height: "2000px" }} />

        </div>
      </div>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="about-us-textbox">
          <h2 className="about-us-title">Our Vision</h2>
          <p className="about-us-description">
            <ul>
              <li>
                Our vision is to create a world where Jaundice is easily
                detected and treated, and where people have access to the tools
                and resources they need to manage their health effectively.
              </li>
              <li>
                We believe that technology can play a crucial role in achieving
                this vision, and we are committed to developing innovative
                solutions that can help healthcare professionals and individuals
                detect and manage Jaundice more efficiently and effectively.
              </li>
              <li>
                We believe that everyone should have access to reliable,
                accurate, and affordable healthcare, and we are dedicated to
                making this a reality.
              </li>
              <li>
                We are also committed to advancing the field of healthcare
                through research and development.
              </li>
            </ul>
          </p>
        </div>
        <div className="about-us-image">
        <img id="image" src={image2} alt="about-us" style={{ width: "1000px", height: "2000px" }} />
        </div>
      </div>
    </div>
  );
};
