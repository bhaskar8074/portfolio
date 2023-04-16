import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
      >
        <div
          className="relative w-full h-[240px]"
          onClick={() => window.open(website_link, "_blank")}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full  object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 
               rounded-full flex justify-center
               items-center cursor-pointer"
            >
              <img
                src={github}
                alt="git"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div className="mt-6" id="works" variants={textVariant()}>
        <p>My Work</p>
        <h1 className={styles.sectionHeadText}>Projects</h1>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project ${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
