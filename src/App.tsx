import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";

function App() {
  return (
    <>
      <main
        onContextMenu={(e) => e.preventDefault()}
        className="relative select-none"
      >
        Nav
        <section className="xl:padding-1 wide:padding-r padding-b">
          Hero
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black text-white padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
