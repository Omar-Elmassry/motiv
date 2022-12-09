import useHover from "@hooks/useHover";
import Image from "next/image";
import React, { useRef } from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  data: {
    id: number;
    title: string;
    icon: string;
    percentage: number;
    color: string;
  };
};

export default function StatsCard({ data }: Props) {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <article
      ref={hoverRef}
      className="group flex h-[266px] w-full flex-col items-center justify-evenly rounded-xl bg-white hover:bg-brand hover:text-white"
    >
      <div className=" flex rounded-full p-1 group-hover:bg-white">
        <Image
          width={38}
          height={38}
          src={data.icon}
          alt={data.title + " icon"}
        />
      </div>
      <h5 className="text-xl font-bold">{data.title}</h5>

      <div className="relative h-28 w-28">
        <CircularProgressbar
          value={data.percentage}
          circleRatio={0.75}
          className="rotate-[135deg] "
          styles={{
            path: {
              stroke: isHover ? "#ffffff" : `${data.color}`,
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: isHover ? "#B37EFC" : "#d6d6d6",
              strokeLinecap: "round",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
          }}
        />
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform text-2xl font-bold">
          {data.percentage}%
        </span>
      </div>
    </article>
  );
}
