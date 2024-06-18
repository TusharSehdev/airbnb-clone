import React from "react";
import Image from "next/image";

const MediumCardData = [
  [
    {
      img: "https://links.papareact.com/2io",
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
  ],
];

const MediumCard = () => {
  return (
    <section className="">
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      {MediumCardData.map((item, index) => (
        <div key={index}>
          <div>
            <Image src={item.img} className="" layout="fill" alt="" />
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MediumCard;
