import React from "react";
//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-12">
          {/* { text } */}

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center font-secondary lg:text-left"
          >
            <h2 className="mb-3">Hi, my name is </h2>
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[80px] font-secondary font-bold mb-3">
              Manish <span> KHADGI</span>
            </h1>

            <div className="mb-6 text-[26px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 "> I am a </span>

              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "UI/UX Designer   ",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              consequuntur quibusdam quis repellat quos deserunt odit quia
            </p>
            <div className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0">
              <button className="btn btn-lg mt-2 ">Contact me </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>

            {/* {  Socials }  */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
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
          </motion.div>
          {/* { image } */}

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:flex flex-1 max-w-[320] lg:max-w-[500px]"
          >
            <img src={Image} alt="" width={550} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
