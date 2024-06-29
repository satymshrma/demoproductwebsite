import React from "react";

type ShoeProps = {
  imgURL: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (bigShoe: string) => void;
  bigShoeImage: string;
};

const Shoecard: React.FC<ShoeProps> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImage,
}) => {
  const handClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigShoeImage === imgURL.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
      onClick={handClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
      {/* <img src={imgURL.bigShoe} alt="big shoe" /> */}
    </div>
  );
};

export default Shoecard;
