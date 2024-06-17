"use client";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Image from "next/image";

const exploreData = [
  {
    img: "https://links.papareact.com/5j2",
    location: "London",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/1to",
    location: "Manchester",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/40m",
    location: "Liverpool",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/msp",
    location: "York",
    distance: "4-hour drive",
  },
  {
    img: "https://links.papareact.com/2k3",
    location: "Cardiff",
    distance: "45-minute drive",
  },
  {
    img: "https://links.papareact.com/ynx",
    location: "Birkenhead",
    distance: "4.5-hour drive",
  },
  {
    img: "https://links.papareact.com/kji",
    location: "Newquay",
    distance: "6-hour drive",
  },
  {
    img: "https://links.papareact.com/41m",
    location: "Hove",
    distance: "2-hour drive",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={item.img}
                alt={item.location}
                className="w-full h-64 object-cover"
                objectFit="contain"
                width={500}
                height={500}
                objectPosition="left"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.location}</h3>
                <p className="text-gray-600">{item.distance}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
