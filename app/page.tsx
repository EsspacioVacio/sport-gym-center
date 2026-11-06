import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <Pricing />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
