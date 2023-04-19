import React from "react";

//count up
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* { image } */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640] mix-blend-lighten bg-top"
          ></motion.div>
          {/* { text } */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mt-3 "> About me.</h2>
            <h3 className="h3 mb-2">
              I'm a Freelancer Full-stack-developer and designer from
              Sydney,Australia with experience in Multiple Projects
            </h3>

            <h1> To do -- ICONS OF Stack </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
