import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kerngegevens from "@/components/Kerngegevens";
import Uitrusting from "@/components/Uitrusting";
import Fiscaal from "@/components/Fiscaal";
import Fotos from "@/components/Fotos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Header />
      {/* pb on mobile keeps content clear of the sticky action bar */}
      <main className="pb-24 md:pb-0">
        <Hero />
        <Kerngegevens />
        <Uitrusting />
        <Fiscaal />
        <Fotos />
        <Contact />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
