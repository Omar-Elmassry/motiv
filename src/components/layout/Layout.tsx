import React, { ReactNode } from "react";
import Header from "./Header";
import SideNave from "./SideNave";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full ">
      <SideNave />
      <div className="flex flex-grow flex-col bg-red-700">
        <Header />
        <div className="flex flex-grow bg-greyBrand">{children}</div>
      </div>
    </div>
  );
}
