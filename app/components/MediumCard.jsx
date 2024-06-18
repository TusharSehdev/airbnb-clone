import React from "react";
import Image from "next/image";

const MediumCardData = [
  {
    img: "https://links.papareact.com/q7j",
    title: "Outdoor getaways",
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays",
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes",
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed",
  },
];

const MediumCard = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide py-3">
      {MediumCardData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 transform transition duratiion-200 ease-out"
          >
            <div className="relative h-90 w-80">
              <Image
                src={item.img}
                className="rounded-lg"
                width={300}
                height={300}
                alt={item.title}
              />
            </div>
            <div className="py-2">
              <p className="">{item.title}</p>
            </div>
          </div>
        
      ))}
      </div>
    </div>
  );
};

export default MediumCard;
