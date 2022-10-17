import React from 'react';

type Props = {};

function Hero({}: Props) {
  return (
    <div className="">
      <div>
        <h3 className="uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-sm md:text-xl xl:text-4xl mb-10">
          Architecture Studio
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          similique sint eveniet officia praesentium voluptatum asperiores
          officiis consequuntur, consequatur, earum, repudiandae ab optio natus
          tenetur mollitia alias quis incidunt? Nobis temporibus quidem autem,
          illum quos ullam dicta maiores nesciunt earum, ipsum officiis
          dignissimos iste veritatis deleniti ab, amet sint error aut quae sed
          consectetur nihil harum assumenda repellendus. Quaerat libero iusto
          dignissimos illo, placeat eaque voluptas enim optio dolorem quis,
          perferendis fuga eligendi at doloremque rem voluptates magnam itaque!
          Aut tempore beatae ipsum exercitationem, ab nobis minima possimus
          laudantium iusto perspiciatis aliquam iure corrupti eveniet
          praesentium autem quas eligendi labore.
        </p>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80"
          className="relative mx-auto object-cover rounded-full w-44 h-44 md:w-72 md:h-72 items-center mb-10 xl:mb-0"
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Hero;
