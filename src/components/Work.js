import React from "react";

//motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

//images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio--img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-14">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* { text } */}
            <div>
              <h2 className="h2 leading-tight text-accent ">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-16">
                Something that I love about software development is the
                opportunity to work with people from a wide range of
                disciplines. Below are some of my work done using MERN stacks
              </p>
              <button className="button-89"> View all Projects </button>
            </div>

            {/* { Image 1} */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* { Overlay } */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* { img } */}

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* { Prettier } */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> </span>
                {/* { Title } */}
                <div className="absolute- -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">
                    Prank Calculator Project
                  </span>
                  <div>
                    <a
                      href="https://react-prank-calculator.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white  "
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    {"  "} |{" "}
                    <a
                      href="https://github.com/moonishkale/React-Prank-Calculator"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-3"
          >
            {/* { Image 2 } */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* { Overlay } */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* { img 2} */}

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* { Prettier } */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"></span>
                {/* { Title } */}
                <div className="absolute- -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">Movie Search API</span>
                  <div>
                    <a
                      href="https://movie-react-delta.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    {"  "} |{" "}
                    <a
                      href="https://github.com/moonishkale/Movie-Reac"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* { Image 3 } */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* { Overlay } */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

              {/* { img 2} */}

              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt=""
              />
              {/* { Prettier } */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> </span>
                {/* { Title } */}
                <div className="absolute- -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 ">
                  <span className="text-3xl text-white">My Portfolio</span>
                  <div>
                    <a
                      href="https://my-portfolio-chi-liard.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white  "
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    {"  "} |{" "}
                    <a
                      href="https://github.com/manish-khadgi-dev/my-portfolio"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
