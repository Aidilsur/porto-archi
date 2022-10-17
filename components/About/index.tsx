import React from 'react';
import Heading from '../Heading';
import { motion } from 'framer-motion';

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center mt-16 xl:mt-0 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <Heading title="About Me" />
        <div className="flex flex-col xl:flex-row justify-center -mt-40 md:mt-0">
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="xl:w-[50%] w-[30%] xl:pr-10 rounded rounded-lg"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <div className="space-y-10 px-0 mt-4">
            <h4 className="text-xl md:text-2xl xl:text-4xl fonst-semibold">
              Here is a{' '}
              <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
              background
            </h4>
            <p className="text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusantium debitis qui architecto, eum, harum, dolor eligendi
              nisi natus id eos autem repellendus ipsa nesciunt impedit
              voluptatem vitae. Ratione at libero in repellat sint sapiente
              excepturi ducimus, optio minus non maiores ad soluta molestias
              voluptatibus, quos voluptates temporibus impedit repudiandae.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
