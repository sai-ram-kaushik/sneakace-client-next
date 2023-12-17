import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Image from "next/image";
import Stars from "../Stars.jsx";

const BigCard = ({ img, label, desc, rating, price }) => {
  return (
    <div className="px-4 py-2 max-w-[400px] border border-gray-200 rounded-xl ">
      <div className="group relative overflow-hidden mt-2 rounded-lg">
        <Image
          className={`cursor-pointer w-full h-full`}
          src={img}
          alt={label}
          width={200}
          height={200}
        />
        <div className="absolute flex items-center justify-center top-[50%] left-[50%] opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
          <div className="flex items-center gap-3 absolute ">
            <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
              <BsBoxArrowInRight size={30} className="text-background" />
            </div>

            <div className="p-2 rounded-full bg-secondary text-background cursor-pointer">
              <AiOutlineEye size={30} className="text-background" />
            </div>
          </div>
        </div>
      </div>

      <div className={`py-2 space-y-2 cursor-pointer`}>
        <p className="text-3xl">{label}</p>
        <div className="flex flex-row justify-between items-center">
        <p className="text-xl">{price}</p>
          <Stars stars={rating} />
          
        </div>

        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
};

export default BigCard;