import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="" id="footer">
      <div className="container mx-auto">
        <div className="text-center mb-3">
          <h3 className="fw-bold"> Get in touch </h3>
          <p className="mt-3 h4">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>
        {/* {  Socials }  */}
        <div className="flex justify-center text-[30px] gap-x-6 items-center">
          <a href="mailto:manishkhadgi123#gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/manish-khadgi-dev">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manishkhadgi/">
            <FaLinkedin />
          </a>
        </div>
        <Row className="text-center p-2 mb-3">
          <h6>&copy; All rights Reserved </h6>
        </Row>
      </div>
      <div className="py-5 mb-20"> </div>
    </section>
  );
};
