import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="coantiner mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span
          className="underline
        underline-offset-4 font-light"
        >
          Testimonials
        </span>
      </h1>
      <p className="text-cenetr text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home With Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((Testimonial, index) => (
          <div
            key={index}
            className="max-w-[340px]  shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              src={Testimonial.image}
              alt={Testimonial.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {Testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{Testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: Testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{Testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
