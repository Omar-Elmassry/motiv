import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CarIcon from "@icons/CarIcon";
import DashboardIcon from "@icons/DashboardIcon";
import Logo from "@icons/Logo";
import LogoutIcon from "@icons/LogoutIcon";
import SettingsIcon from "@icons/SettingsIcon";
import { setCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import { utilsActions } from "src/store/utilsSlice";

type Props = {};

export default function SideNave({}: Props) {
  const t = useTranslation().t;

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const dispatch = useDispatch();

  const links = [
    {
      title: t("common:dashboard"),
      href: "/",
      icon: <DashboardIcon />,
    },
    { title: t("common:cars"), href: "/cars", icon: <CarIcon /> },
    { title: t("common:settings"), href: "/settings", icon: <SettingsIcon /> },
    { title: t("common:logout"), href: "/logout", icon: <LogoutIcon /> },
  ];

  const { smScreen, menuOpen } = useSelector((state: RootState) => {
    return {
      smScreen: state.utils.isMobileScreen,
      menuOpen: state.utils.menuOpened,
    };
  });

  const sideMenuOnMobile = () => {
    let classes;
    if (smScreen) {
      menuOpen ? (classes = "sideMenu opened") : (classes = "sideMenu");
    }
    return classes;
  };

  const handleLanguageChange = async () => {
    dispatch(utilsActions.setMenuOpened(false));
    setCookie("NEXT_LOCALE", router.locale === "en" ? "ar" : "en");
    await router.push({ pathname, query }, asPath, {
      locale: router.locale === "en" ? "ar" : "en",
    });
    router.reload();
  };

  return (
    <nav
      className={`z-[100] hidden border-r-greyBrand lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/5 lg:border-r-2
      ${sideMenuOnMobile()}`}
    >
      <div className="flex w-10/12 flex-col bg-white px-7 py-5 lg:w-full lg:flex-grow ">
        <div className="flex h-[80px] w-full items-center">
          <Logo className="w-40" />
        </div>

        <ul className="mt-5 font-medium capitalize text-greyBrand-500">
          {links.slice(0, 2).map((link, index) => (
            <li
              key={`${index} ${link.href}`}
              className={`rounded-md  p-2 ${
                router.pathname === link.href ? "bg-greyBrand" : ""
              }`}
              onClick={() => {
                dispatch(utilsActions.setMenuOpened(false));
              }}
            >
              <Link key={`${index} ${link.href}`} href={`/${link.href}`}>
                <a className="flex items-center gap-2">
                  {link.icon}
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-auto font-medium capitalize text-greyBrand-500">
          <li className={`rounded-md  p-2 `}>
            <button
              className="flex items-center gap-2"
              onClick={handleLanguageChange}
            >
              <GlobeAltIcon className="h-5 w-5" />
              {t("common:language")}
            </button>
          </li>

          {links.slice(2).map((link, index) => (
            <li
              key={`${index} ${link.href}`}
              className={`rounded-md  p-2 ${
                router.pathname === link.href ? "bg-greyBrand" : ""
              }`}
              onClick={() => {
                dispatch(utilsActions.setMenuOpened(false));
              }}
            >
              <Link key={`${index} ${link.href}`} href={`${link.href}`}>
                <a className="flex items-center gap-2">
                  {link.icon}
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="flex flex-grow justify-center text-white lg:hidden"
        onClick={() => {
          dispatch(utilsActions.setMenuOpened(false));
        }}
      >
        <div className="pt-7">
          <XMarkIcon className="w-10" />
        </div>
      </button>
    </nav>
  );
}
