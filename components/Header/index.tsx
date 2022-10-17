import NavLink from 'next/link';
import React from 'react';
import { useIsDesktop } from '../../utils';
import { FaHome, FaFolderOpen, FaRegCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

type Props = {};

function Header({}: Props) {
  const isDesktop = useIsDesktop();
  const menus = [
    {
      title: isDesktop ? 'All Project' : <FaFolderOpen />,
      path: '/project',
    },
    {
      title: isDesktop ? 'Gani M Pakuan' : <FaHome />,
      path: '/',
    },
    {
      title: isDesktop ? 'Get In Touch' : <FaRegCommentDots />,
      path: '/contact',
    },
  ];

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="absolute top-0 left-0 right-0 p-3 xl:p-7 w-full md:max-w-7xl mx-auto border-b-2 border-black">
      <nav className="flex items-center justify-between text-s md:text-lg font-semibold">
        {menus.map((menu, index) => {
          return (
            <NavLink key={index} href={menu.path}>
              <p className="cursor-pointer text-2xl xl:text-lg">{menu.title}</p>
            </NavLink>
          );
        })}
      </nav>
    </motion.header>
  );
}

export default Header;
