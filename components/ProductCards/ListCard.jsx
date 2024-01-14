import Image from "next/image";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons";
import Stars from "../Stars";
const ListCard = ({ img, label, desc, rating, price }) => {
  return (
    <div className="rounded-xl mb-4  lg:w-[60vw] max-h-[35vh] w-full " style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
      <div className=" flex flex-row  ">
        <div className=" min-w-[120px]">
          <Image
            className={` cursor-pointer p-5 rounded-lg`}
            src={img[0]}
            alt={label}
            width={240}
            height={240}
          />
        </div>
        <div className="py-5 ">
          <div className="flex h-full flex-col justify-around">
            <p className="text-xl md:text-3xl text-black">{label}</p>
            <p className="text-sm md:text-xl text-red-600">₹ {price}</p>
            <p className="text-sm md:text-sm text-gray-400">{desc}</p>
            <Stars stars={rating} />

            <div className="flex flex-row gap-2 "> 
            <div className="p-2 rounded-lg bg-secondary text-background cursor-pointer">
              <BsBoxArrowInRight size={16} className="text-background" />
            </div>

            <div className="p-2 rounded-lg bg-secondary text-background cursor-pointer">
              <AiOutlineEye size={16} className="text-background" />
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListCard;
