import React from 'react';
import Heading from '../Heading';
import { motion } from 'framer-motion';
import LatestProjectCard from '../LatestProjectCard';

type Props = {};

function LatestProject({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center mt-16 xl:mt-0 relative">
      <Heading title="Latest Project" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <LatestProjectCard />
      </motion.div>
    </div>
  );
}

export default LatestProject;
