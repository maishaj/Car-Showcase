import Hero from "@/components/Hero/Hero";
import CarListings from "@/components/CarListings/CarListings";
import Contact from "@/components/Contact/contact";


export default function Home() {
  return (
    <div className="space-y-20">
        <section>
          <Hero></Hero>
        </section>
        <section id="vehicles">
          <CarListings></CarListings>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
    </div>
  );
}
