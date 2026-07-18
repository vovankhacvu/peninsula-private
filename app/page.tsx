"use client";

import { useEffect, useState } from "react";

import LoadingScreen from "@/components/LoadingScreen";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Overview from "@/components/home/Overview";
import Location from "@/components/home/Location";
import Amenities from "@/components/home/Amenities";
import FloorPlan from "@/components/home/FloorPlan";
import Highlights from "@/components/home/Highlights";
import Contact from "@/components/home/Contact";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />

      {!loading && (
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
      )}
    </>
  );
}