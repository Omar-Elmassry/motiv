import { Bars3Icon, BellAlertIcon } from "@heroicons/react/24/solid";
import BellIcon from "@icons/BellIcon";
import Logo from "@icons/Logo";
import SearchIcon from "@icons/SearchIcon";
import userAvatar from "@PubImages/userAvatar.jpg";
import Input from "@ui-assets/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { utilsActions } from "src/store/utilsSlice";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 flex h-[80px] justify-between bg-white p-3 md:px-5 z-50 border-b-2 border-brand">
      <div className="flex items-center gap-2 md:gap-5 lg:w-1/3">
        <button
          className="text-greyBrand-500 lg:hidden"
          onClick={() => {
            dispatch(utilsActions.setMenuOpened(true));
          }}
        >
          <Bars3Icon className="w-8" />
        </button>
        <button className="lg:hidden" onClick={() => {}}>
          <SearchIcon />
        </button>

        <Input
          className="hidden w-full rounded-xl bg-greyBrand p-2 px-3 lg:flex"
          icon={<SearchIcon />}
          type={"text"}
          placeholder="Search or type"
        />
      </div>
      <div className="flex items-center lg:hidden">
        <Logo className="w-40" />
      </div>
      <div className="flex items-center md:gap-3 gap-2">
        <div
          className={`rounded-full p-2 ${
            router.pathname.startsWith("notification") ? " bg-greyBrand" : ""
          }`}
        >
          <Link href={"/notification"}>
            <a>
              <BellIcon />
            </a>
          </Link>
        </div>
        <div className="">
          <Image src={userAvatar} alt="user avatar" className="rounded-full" />
        </div>
      </div>
    </header>
  );
}
