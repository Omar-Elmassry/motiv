import Image from "next/image";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";

type Badge = { text: string; number: string; color: string };
type Props = {
  data: {
    id: number;
    span: number;
    title: string;
    desc: string;
    imageSrc: string;
    buttonText: string;
    href: string;
    bg: string;
    color: string;
    badge: Badge | null;
  };
};

export default function AdCard({ data }: Props) {
  const { smScreen } = useSelector((state: RootState) => {
    return {
      smScreen: state.utils.isMobileScreen,
    };
  });
  return (
    <article
      className={`group flex min-h-[220px] w-full flex-col  rounded-sm p-3 md:p-5`}
      style={{
        backgroundColor: data.bg,
        gridColumn: "span " + data.span,
        color: data.color,
      }}
    >
      <div className="flex items-center justify-evenly">
        <div className="">
          <h5 className="font-bold md:text-2xl">{data.title}</h5>

          {data.badge && (
            <>
              <div>
                <p
                  style={{ color: data.badge.color }}
                  className="text-xl font-bold md:text-3xl"
                >
                  {data.badge.number}
                </p>

                <p className="font-bold md:text-2xl">{data.badge.text}</p>
              </div>
            </>
          )}
          <p
            className={`${data.badge ? "text-xs" : "font-medium"} mt-2`}
            style={{ color: data.badge?.color ?? data.color }}
          >
            {data.desc}
          </p>

          {data.buttonText && (
            <>
              <div>
                <button className=" mt-5 rounded bg-slate-900 px-6 py-3 text-xs font-bold text-white hover:opacity-95">
                  {data.buttonText}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="mb-4 h-4/5 w-auto overflow-hidden">
          <Image
            src={data.imageSrc}
            alt={data.title}
            width={300}
            height={300}
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </article>
  );
}
