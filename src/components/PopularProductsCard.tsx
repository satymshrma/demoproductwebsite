import { star } from "../assets/icons";

type PopularProductsCardProps = {
  imgURL: string;
  name: string;
  price: string;
  rating: number;
};

const PopularProductsCard: React.FC<PopularProductsCardProps> = ({
  imgURL,
  name,
  price,
  rating,
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-slate-gray text-xl leading-normal font-montserrat">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
