import React from "react";
import { FaStar } from "react-icons/fa";

const MentorCard = ({
  name,
  specialization,
  diseases,
  reviews,
  image,
}) => {
  return (
    <div className="h-[80vh] overflow-hidden border border-gray-300 rounded-lg">
      <div className="h-[60%] w-full">
        <img
          className="h-full object-cover w-full"
          src={image}
          alt="Mentor Profile"
        />
      </div>
      <div className="h-[40%] p-6 flex flex-col justify-between">
        <h2 className="text-xl font-semibold ">{name}</h2>
        <p className="text-base text-gray-500">{specialization}</p>
        <div className="flex gap-2 items-center">
          {diseases.map((item, index) => (
            <div key={index} className="px-2.5 py-0.5 bg-gray-200 font-semibold rounded-full text-xs">
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-2 font-semibold items-center">
          <FaStar />
          {reviews.rating} <div className="text-gray-500 font-normal">({reviews.numReviews} reviews)</div>
        </div>
        <div className="w-full py-2 text-center bg-colour1 rounded-md text-white font-semibold">
          View Profile
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
