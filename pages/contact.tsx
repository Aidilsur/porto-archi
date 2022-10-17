import React from 'react';
import Layout from '../layout';
import { FaEnvelopeOpen, FaPhoneAlt, FaMap } from 'react-icons/fa';

type Props = {};

function contact({}: Props) {
  const details = [
    {
      title: '08134567890',
      icon: <FaPhoneAlt />,
    },
    {
      title: 'tes@gmail.com',
      icon: <FaEnvelopeOpen />,
    },
    {
      title: 'Jalan Setiabudhi',
      icon: <FaMap />,
    },
  ];
  return (
    <Layout title="Contact">
      <section>
        <div className="h-screen flex items-center justify-center relative mt-40">
          <h3 className="absolute top-0 uppercase tracking-[10px] xl:tracking-[20px] text-xl font-semibold text-gray-500">
            Get In Touch
          </h3>
          <div className="flex w-full items-center justify-between text-center">
            <div className="w-[50%]">
              <h4 className="uppercase text-lg font-semibold">
                Please Call Me
              </h4>
              <div></div>
            </div>
            <div className="w-[50%]">
              <p>input</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default contact;
