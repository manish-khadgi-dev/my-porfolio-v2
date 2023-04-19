import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "UI/UX Design",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eveniet accusamus quo? Aperiam aut nam odit a beatae! ",
    link: "Learn More",
  },
  {
    name: "Website Development",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eveniet accusamus quo? Aperiam aut nam odit a beatae! ",
    link: "Learn More",
  },
  {
    name: "E-commerce Development",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eveniet accusamus quo? Aperiam aut nam odit a beatae! ",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div>
          {/* {text} */}
          <div>
            <h2 className="h2 text-accent"> What I Do.</h2>
            <h3 className="h3 max-w-[455px">
              I'm a Freelance Full-stack-developer with experience in multiple
              projects
            </h3>
          </div>

          {/* { services } */}
        </div>
      </div>
    </section>
  );
};

export default Services;
