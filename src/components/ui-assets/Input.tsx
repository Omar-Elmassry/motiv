import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode | StaticImageData;
  onChangeFunc?: (val: string) => void;
};

export default function Input({
  className,
  icon,
  type,
  placeholder,
  onChangeFunc,
}: Props) {
  return (
    <div className={`${className} flex items-center gap-2`}>
      <>
        {icon}
        <input
          className={`${
            icon
              ? "ltr:border-l ltr:border-l-[#EF9011] rtl:border-r rtl:border-r-[#EF9011]"
              : ""
          } w-full bg-transparent px-2 placeholder:text-greyBrand-500`}
          type={type ?? "text"}
          placeholder={placeholder}
          onChange={(e) => {
            if (onChangeFunc) {
              onChangeFunc(e.target.value);
            }
          }}
        />
      </>
    </div>
  );
}
