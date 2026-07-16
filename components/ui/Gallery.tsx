"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery() {
  useEffect(() => {
    Fancybox.bind(
      document.body,
      "[data-fancybox='floorplan']",
      {}
    );

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return null;
}