import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What Our <span className="text-coral-red">Customers</span> Say
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear from our happy customers.
      </p>

      <div className="mt-24 flex flex-col justify-evenly items center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
