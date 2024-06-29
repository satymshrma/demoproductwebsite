import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-evenly items-center max-lg:flex-col gap-10"
    >
      <h3 className="font-palanquin font-bold text-4xl text-center leading-[68px] lg:max-w-md">
        Sign Up For <span className="text-coral-red">Updates & Newsletter</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex max-sm:flex-col items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
