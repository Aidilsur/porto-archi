import React from 'react';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-screen flex justify-center items-center flex-col-reverse mt-28 md:mt-0 xl:flex-row">
      <div className="text-center xl:w-[60%]">
        <h3 className="uppercase stracking-[10px] xl:tracking-[20px] font-semibold text-gray-500 mb-4 xl:text-2xl">
          Architecture Studio
        </h3>
        <p className="text-s xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          distinctio ut ipsum beatae itaque voluptate explicabo consectetur
          laborum aliquid, ullam doloribus optio illo consequuntur iusto odit
          culpa, similique quibusdam esse? Quae et hic, nostrum aspernatur nemo,
          magnam dolorum eaque, quod alias voluptatem tempore itaque a amet quam
          sapiente odit totam numquam. Officiis laboriosam dolores praesentium.
          Nesciunt eveniet modi, atque ex quaerat esse tempora beatae tenetur
          odio, debitis explicabo doloremque? Dignissimos, exercitationem?
          Repudiandae assumenda facere nihil, quas aliquid, non impedit ipsa
          rerum odit quia, quidem provident illo corporis temporibus soluta
          voluptatum. Cum, qui consequatur consequuntur libero eius laudantium
          eum ea eos?
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80"
        className="relative mx-auto object-cover rounded-full w-44 h-44 md:w-72 md:h-72 items-center mb-10 xl:mb-0"
        alt="profile"
      />
    </div>
  );
}

export default Hero;
