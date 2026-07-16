import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Overview from "@/components/home/Overview";
import Location from "@/components/home/Location";
import Amenities from "@/components/home/Amenities";
import FloorPlan from "@/components/home/FloorPlan";
import Highlights from "@/components/home/Highlights";
import Gallery from "@/components/home/Gallery";
import Contact from "../components/home/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Overview />
      <Location />
      <Amenities />
      <FloorPlan />
      
      <Highlights />
      <Contact />
    </>
  );
}