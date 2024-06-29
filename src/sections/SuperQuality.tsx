import { shoe8 } from "../assets/images";
import Button from "../components/Button";
// import { arrowRight } from "../assets/icons";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Your feet deserve the best. Our shoes prioritize comfort and support,
          ensuring every step feels amazing, whether you're conquering trails or
          conquering your day. <br /> Look good, feel good.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          We sweat the small stuff, so you don't have to. Expect a perfect fit
          and flawless finish.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center item-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
