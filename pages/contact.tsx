import React from 'react';
import Layout from '../layout';
import { FaEnvelopeOpen, FaPhoneAlt, FaMap } from 'react-icons/fa';
import { FormContact } from '../components';

type Props = {};

function contact({}: Props) {
  const information = [
    {
      title: '08134567890',
      icon: <FaPhoneAlt className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
    },
    {
      title: 'tes@gmail.com',
      icon: <FaEnvelopeOpen className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
    },
    {
      title: 'Jalan Setiabudhi',
      icon: <FaMap className="text-[#f7ab0a] h-7 w-7 animate-pulse" />,
    },
  ];
  return (
    <Layout title="Contact">
      <section>
        <div className="h-screen flex items-center justify-center relative mt-40">
          <h3 className="absolute top-0 uppercase tracking-[10px] xl:tracking-[20px] text-xl font-semibold text-gray-500">
            Get In Touch
          </h3>
          <div className="w-full flex flex-col md:flex-row items-center justify-evenly xl:-mt-96">
            <div className="md:-mt-48 xl:-mt-40">
              <h4 className="uppercase font-semibold text-center mb-4 xl:m-8 xl:text-2xl">
                Contact Me
              </h4>
              <ul>
                {information.map((info, index) => (
                  <>
                    <li key={index} className="flex items-center mb-4 xl:ml-8">
                      <div className="pr-3">{info?.icon}</div>
                      <p className="xl:text-semibold xl:text-lg">
                        {info?.title}
                      </p>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div>
              <FormContact />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default contact;
