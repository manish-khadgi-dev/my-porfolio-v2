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
        <div className="flex flex-col lg:flex-row">
          {/* {text} */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent mb-6"> What I Do.</h2>
            <h3 className="h3 max-w-[455px mb-16">
              I'm a Freelance Full-stack-developer with experience in multiple
              projects
            </h3>

            <button className="btm btn-sm"> See My Work </button>
          </div>

          {/* { services } */}
        </div>
      </div>
    </section>
  );
};

export default Services;
