"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "@/app/segment/Hero";
import Porfolio from "@/app/segment/portfolio/Porfolio";
import { useTheme } from "next-themes"; // Import the useTheme hook
import {GlobalStore} from '@/app/GlobalStore'
import Experience from "./segment/experience/page";

export default function IndexPage() {
  const { theme } = useTheme(); // Get the current theme from next-themes
  const {set_is_dark} = GlobalStore();
  // Log theme changes to the console
  useEffect(() => {
    if(theme === "dark"){
      set_is_dark(true)
    }else{
      set_is_dark(false)
    }
    console.log(`Current theme: ${theme === "dark" ? "Dark mode" : "Light mode"}`);
  }, [theme]); // This will run whenever the theme changes

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="h-full w-full">
      <Hero />
      <Porfolio />
      <Experience />
    </div>
  );
}
