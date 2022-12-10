import { Bars3Icon, BellAlertIcon } from "@heroicons/react/24/solid";
import BellIcon from "@icons/BellIcon";
import Logo from "@icons/Logo";
import SearchIcon from "@icons/SearchIcon";
import userAvatar from "@PubImages/userAvatar.jpg";
import Input from "@ui-assets/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { utilsActions } from "src/store/utilsSlice";

type Props = {};

export default function Header({}: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex min-h-[80px] flex-col border-b-2 border-brand bg-white p-3 md:px-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2 md:gap-5 lg:w-1/3">
          <button
            className="text-greyBrand-500 lg:hidden"
            onClick={() => {
              dispatch(utilsActions.setMenuOpened(true));
            }}
          >
            <Bars3Icon className="w-8" />
          </button>
          <button
            className="lg:hidden"
            onClick={() => {
              setMobileSearch(!mobileSearch);
            }}
          >
            <SearchIcon />
          </button>

          <Input
            className="hidden w-full rounded-xl bg-greyBrand p-2 px-3 lg:flex"
            icon={<SearchIcon />}
            type={"text"}
            placeholder="Search or type"
            onChangeFunc={(val) => dispatch(utilsActions.setSearchInput(val))}
          />
        </div>
        <div className="flex items-center lg:hidden">
          <Logo className="w-40" />
        </div>
        <div className="flex items-center gap-2 md:gap-3">
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
            <Image
              src={userAvatar}
              alt="user avatar"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {mobileSearch && (
        <Input
          className="mt-2 w-full rounded-xl bg-greyBrand p-2 px-3 lg:hidden"
          icon={<SearchIcon />}
          type={"text"}
          placeholder="Search or type"
          onChangeFunc={(val) => dispatch(utilsActions.setSearchInput(val))}
        />
      )}
    </header>
  );
}
