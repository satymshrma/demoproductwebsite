import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          className="object-contain w-full"
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          A<span className="text-coral-red"> Special</span> Offer <br /> Just
          For You
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Don't miss out! For a limited time, enjoy 30% off your entire
          purchase. Shop our premium selection of Sportwear and elevate your
          style.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Shop with confidence! Now with free returns that make it easy.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            colors={{
              backgroundColor: "bg-white",
              textColor: "text-slate-gray",
              borderColor: "border-slate-gray",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
