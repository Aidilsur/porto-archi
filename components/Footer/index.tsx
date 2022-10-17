import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="absolute bottom-0 left-0 right-0 w-full mx-auto flex justify-between items-center xl:max-w-7xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
        className="flex xl:p-3 items-center">
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://twitter.com/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://facebook.com/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://instagram.com/"
        />
      </motion.div>
    </footer>
  );
}

export default Footer;
