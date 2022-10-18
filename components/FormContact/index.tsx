import React from 'react';

type Props = {};

function FormContact({}: Props) {
  return (
    <form className="w-fit flex flex-col items-center justify-center p-3">
      <div className="flex flex-col xl:flex-row items-center justify-center mx-auto w-full">
        <input
          type="text"
          className="contactInput xl:mr-2"
          placeholder="Name"
        />
        <input type="email" placeholder="Email" className="contactInput" />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="contactInput w-full xl:my-3"
      />
      <textarea className="contactInput w-full" placeholder="Message" />
      <button className="mt-5 bg-[#f7ab0a] px-10 py-5 rounded-md font-bold text-md xl:text-lg">
        submit
      </button>
    </form>
  );
}

export default FormContact;
