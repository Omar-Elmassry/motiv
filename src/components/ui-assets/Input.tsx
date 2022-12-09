import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode | StaticImageData;
};

export default function Input({ className, icon, type, placeholder }: Props) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <>
        {icon}
        <input
          className={`${
            icon ? "border-l border-l-[#EF9011]" : ""
          } w-full bg-transparent px-2 placeholder:text-greyBrand-500`}
          type={type ?? "text"}
          placeholder={placeholder}
        />
      </>
    </div>
  );
}
