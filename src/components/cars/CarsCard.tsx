import LikeIcon from "@icons/BellIcon copy";
import Image from "next/image";

import React, { useState } from "react";

type Props = {
  data: {
    id: number;
    img: string;
    name: string;
    desc: string;
    capacity: number;
    system: string;
    price: number;
  };
};

export default function CarCard({ data }: Props) {
  const [liked, setLiked] = useState(false);
  return (
    <article
      className={`group flex min-h-[236px] w-full flex-col justify-between rounded-xl bg-white p-5`}
    >
      <div className="flex justify-between">
        <div className="">
          <h3 className="mb-1 text-xl font-bold">{data.name}</h3>
          <p>{data.desc}</p>
        </div>
        <div className="">
          <LikeIcon
            className={"h-6 w-6 cursor-pointer"}
            fill={liked ? "#F84F56" : "#fff"}
            onClick={() => {
              setLiked(!liked);
            }}
          />
        </div>
      </div>
      <div className="relative my-3 flex h-auto w-full center-center lg:h-[170px] ">
        <Image src={data.img} alt={data.name} width={284} height={130} />
      </div>
      <div className="flex justify-between text-greyBrand-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bestSelling/profile.svg"
              alt="profile"
              width={16}
              height={16}
            />
            {data.capacity}
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/bestSelling/retweet.svg"
              alt="retweet"
              width={16}
              height={16}
            />
            {data.system}
          </div>
        </div>
        <div className="">
          <span className="font-bold"> ${data.price}</span>/d
        </div>
      </div>
    </article>
  );
}
