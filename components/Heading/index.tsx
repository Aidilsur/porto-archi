import React from 'react';

type Props = { title: string };

function Heading({ title }: Props) {
  return (
    <h3 className="absolute top-0 mx-auto w-full uppercase tracking-[10px] xl:tracking-[20px] xl:text-2xl text-center text-gray-500 ">
      {title}
    </h3>
  );
}

export default Heading;
