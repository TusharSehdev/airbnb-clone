"use client";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import MediumCard from "./components/MediumCard";
import BigCard from "./components/BigCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <SmallCard />
        <MediumCard />
        <BigCard />
      </main>
        
    </>
  );
}
