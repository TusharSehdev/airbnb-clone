import React, { useEffect, useRef } from "react";
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust this value to control scroll speed
        scrollAmount += 1;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 10); // Adjust this value to control scroll interval

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div
        ref={scrollRef}
        className="flex space-x-3 overflow-x-auto py-3 scroll-smooth scrollbar-thin"
      >
        {MediumCardData.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out snap-center"
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
