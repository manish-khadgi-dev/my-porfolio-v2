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
      " Able to deliver visually enaging web applications with outstanding UI/UX. ",
    link: "Learn More",
  },
  {
    name: "Website Development",
    description:
      "When creating a scalable website, I keep my clients' best interests in mind and do my best to fulfil or even surpass their expectations for the way the product or service is delivered. ",
    link: "Learn More",
  },
  {
    name: "Custom CMS Development",
    description:
      " Every business would prefer a custom-tailored CMS system to support their workflow.",
    link: "Learn More",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* {text} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg- lg:bg-bottom bg-no-repeat mb-12 lg:mb-[-3rem] bg-contain "
          >
            <h2 className="h2 text-accent mb-4"> What I Do.</h2>
            <h3 className="h4 max-w-[455px] mb-10">
              I build digital experiences and products with my passion and
              abilities.
              <hr />
              Below are some of the services I provide.
            </h3>

            <a href="https://my-portfolio-chi-liard.vercel.app/projects">
              <button className="btn btn-sm ">See My Work</button>
            </a>
          </motion.div>

          <div className="flex-1">
            {/* { services  } */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-black/30 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
