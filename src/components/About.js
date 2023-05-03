import React from "react";
import Marquee from "react-fast-marquee";

// intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { icons } from "react-icons";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about">
      <div className="container mx-auto p-5">
        <h2 className="h2 text-accent mt-[10rem] flex justify-center ">
          About Me.
        </h2>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-[40rem] ">
          {/* { image } */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-3/4 mix-blend-bright bg-top"
          ></motion.div>
          {/* { text } */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h3 className="h4 max-w-[450px ] mb-16 mt-20 lg:py-20 sm:text-[20px]">
              I adore programming and taking ideas from concept to completion.
              Personally, I build stunning web apps from scratch using
              JavaScript and its framework.
            </h3>

            <h2 className="h2 text-accent mt-3 "> Tech Stack Skills</h2>

            {/* //tech stack icons  */}
            <div className="mb-[2rem]"> </div>

            <div className="">
              <motion.div
                animate={{ x: 10 }}
                transition={{ delay: 2 }}
                className=" flex gap-x-5"
              >
                <div>
                  <i className="fa-brands fa-react "></i> REACT
                </div>
                <div>
                  <i className="fa-brands fa-node-js text-success "></i> NODE
                </div>
                <div>
                  <i className="fa-solid fa-database text-success"></i> MONGODB
                </div>

                <div>
                  <i className="fa-brands fa-js text-warning"></i> JavaScript
                </div>
                <div>
                  <i class="fa-brands fa-docker text-info"></i> Docker{" "}
                </div>
              </motion.div>
              <br />
              <motion.div
                animate={{ x: 10 }}
                transition={{ delay: 2 }}
                className=" flex gap-x-5 "
              >
                <div>
                  <i className="fa-brands fa-html5 text-danger"></i> HTML5
                </div>
                <div>
                  <i className="fa-brands fa-css3-alt text"></i> CSS3
                </div>
                <div>
                  <i className="fa-brands fa-bootstrap text-success"></i>
                  BOOTSTRAP
                </div>
                <div>
                  <i className="fa-brands fa-git-alt"></i> Git
                </div>

                <div>
                  <i className="fa-brands fa-figma"></i> FIGMA
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
