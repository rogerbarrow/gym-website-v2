import React from "react";
import home1 from "../img/home2.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>HIT THE </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
               <span>GYM</span> AND YOUR 
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}><span>GOALS.</span></motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
        BlackRock Fitness gives you access to everything you need reach your fitness goals: weight and strength training areas, a wide selection of free weights, cardio equipment, resistance machines, group exercise classes, plus a team of certified Personal Trainers ready to support and motivate…
        </motion.p>
        <motion.button variants={fade}>Join the Club</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
