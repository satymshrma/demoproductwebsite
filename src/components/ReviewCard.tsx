import React from "react";
import { star } from "../assets/icons";

type ReviewCardProps = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};
const ReviewCard: React.FC<ReviewCardProps> = ({
  imgURL,
  customerName,
  rating,
  feedback,
}) => {
  return (
    <div className="flex max-lg:flex-col-reverse gap-6 lg:justify-evenly justify-around items-center shadow-lg p-6 rounded-md bg-white">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img
          src={imgURL}
          alt={customerName}
          className="rounded-full object-cover w-[120px] h-[120px]"
          //   width={80}
          //   height={80}
        />
        <p className="font-palanquin font-bold text-3xl mt-1">{customerName}</p>
        <div className="mt-3 flex gap-2.5 justify-center items-center">
          <img
            src={star}
            alt="star"
            className="object-contain m-0"
            width={24}
            height={24}
          />
          <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
        </div>
      </div>
      <p className="mt-6 max-w-sm text-center info-text">"{feedback}"</p>
    </div>
  );
};

export default ReviewCard;
