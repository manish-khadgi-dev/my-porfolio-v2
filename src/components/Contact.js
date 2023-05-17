import React, { useRef } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05nq12o",
        "template_pg4g7rm",
        form.current,
        "OG4dKWkCmx7abuXh9"
      )
      .then(
        (result) => {
          console.log(result.text);
          return alert("message sent succesfully");
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section " id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* { text } */}

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* { form } */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-accent rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start "
          >
            <input
              name="user_name"
              className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-dark"
              type="text"
              placeholder="Your name"
            />
            <input
              name="user_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-dark"
              type="text"
              placeholder="Your email"
            />

            <textarea
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-dark focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message "
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="bg-accent hover:bg-pinks-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
