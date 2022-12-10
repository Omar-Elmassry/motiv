import Image from "next/image";

import React from "react";

type Props = {
  data: {
    id: number;
    img: string;
    name: string;
    recommend: number;
    hourlyPrice: number;
    retweet: number;
    bg: string;
  };
};

export default function BestsellingCard({ data }: Props) {
  return (
    <article
      className={`group flex min-h-[236px] w-full flex-col  rounded-xl p-5`}
      style={{
        backgroundColor: data.bg,
      }}
    >
      <div className="flex items-center gap-3">
        <Image
          width={24}
          height={24}
          src="/images/bestSelling/gear.svg"
          alt="gear"
        />
        <p className="font-bold">{data.recommend}% Recommend</p>
      </div>
      <div className="relative my-3 flex h-auto w-full center-center lg:h-[170px] ">
        <Image src={data.img} alt={data.name} width={354} height={120} />
      </div>
      <h3 className="mb-3 text-xl font-bold">{data.name}</h3>
      <div className="flex justify-between text-greyBrand-500">
        <div className="flex items-center gap-4">
          <span className="flex gap-4">
            <Image
              src="/images/bestSelling/retweet.svg"
              alt="retweet"
              width={16}
              height={16}
            />
            {data.retweet}K
          </span>
          <Image
            src="/images/bestSelling/star.svg"
            alt="star"
            width={16}
            height={16}
          />

          <Image
            src="/images/bestSelling/boost.svg"
            alt="boost"
            width={16}
            height={16}
          />
        </div>
        <p>${data.hourlyPrice}/h</p>
      </div>
    </article>
  );
}
