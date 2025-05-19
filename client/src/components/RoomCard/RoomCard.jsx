import React from 'react';
import { TbRulerMeasure } from "react-icons/tb";
import { IoPeopleSharp } from "react-icons/io5";

import Button from '../Buttons/Button';

const RoomCard = ({ room }) => {

  const { title, description, size, maxPeople, price, image } = room;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="flex justify-between p-3 text-sm font-semibold subheading">
        <span><TbRulerMeasure size={'20px'} /> Size {size}</span>
        <span><IoPeopleSharp size={'20px'} /> Max People {maxPeople}</span>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold mb-2 heading">{title}</h3>
        <p className=" text-sm mb-4 text-content">{description}</p>
        <Button
        buttonType="primary"
        label={`Book Now from ${price}`}
        handleButtonClick={undefined}
        prefixIcon={undefined}
        suffixIcon={undefined}
        className='text-[#875426]! border-[#875426]! hover:bg-[#875426]! hover:text-zinc-100!'
      
      />
        {/* <button className="px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-800 transition">
          Book Now From {price}
        </button> */}
      </div>
    </div>
  );
};

export default RoomCard;
