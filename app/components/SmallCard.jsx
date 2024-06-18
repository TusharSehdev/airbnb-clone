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
import React from "react";

const SmallCard = () => {
  return (
    <div>
      <section>
        <h2 className="text-4xl font-semibold pb-5 pt-6">Explore Nearby</h2>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exploreData.map((item, index) => (
          <div
            key={index}
            className="flex item-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transiton transform duration-200 ease-out"
          >
            <div className="relative w-16 h-16">
              {/* left  */}
              <Image
                src={item.img}
                layout="fill"
                className="rounded-xl"
                alt=""
              ></Image>
            </div>
            {/* right  */}
            <div>
              <p className="font-semibold">{item.location}</p>
              <p className="text-gray-500">{item.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCard;
