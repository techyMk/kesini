import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </main>
  );
}
