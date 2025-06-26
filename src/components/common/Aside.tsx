"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  DashboardControllerMenu,
  DashboardMenu,
} from "@/utils/components/Menu";

type AsideType = {
  activeId: number;
};

type MenuType = { title: string; img: string; link: string };
export const Aside = ({ activeId }: AsideType) => {
  const [menu, setMenu] = useState<MenuType[]>([]);
  const [hide, sethide] = useState<boolean>(false);

  useEffect(() => {
    setMenu(DashboardMenu);
  }, []);

  return (
    <aside
      className={`w-[252px] duration-300 h-[100vh] pb-[20px] overflow-auto aside-dashboard  flex flex-col  p-[16px] pt-[35px] ${
        hide && "shrink-aside"
      } `}
    >
      <div className="flex items-center justify-between mb-[46px] px-[8px] logo">
        {!hide && (
          <Link href="/">
            <img src="/images/aside/logo.svg" alt="" />
          </Link>
        )}

        <button
          className={`cursor-pointer ${hide && "rotate-180 pr-1"}`}
          onClick={() => sethide(!hide)}
        >
          <img src="/images/aside/collapse.svg" alt="" />
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        {menu.map((eachMenu, key) => (
          <Link
            key={key}
            href={eachMenu.link}
            className={`text-[14px] font-normal  h-[45px] rounded-[12px] w-full flex items-center px-[12px] gap-4 ${
              activeId == key + 1 &&
              "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-link-aside"
            }`}
          >
            <img
              src={`/images${eachMenu.img}`}
              className={`w-[20px] h-[20px]  ${
                activeId == key + 1 && "filter brightness-0"
              }`}
              alt=""
            />
            <p
              className={`text-[14px] font-normal   ${
                activeId == key + 1 ? "text-[#020911]" : "#text-[#525A65]"
              }`}
            >
              {eachMenu.title}
            </p>
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-2 justify-end  flex-1">
        <Link
          href="/account"
          className={`text-[14px] font-normal  h-[45px] rounded-[12px] w-full flex items-center px-[12px] gap-4`}
        >
          <img
            src={`/images/aside/${DashboardControllerMenu[0].img}`}
            className={`w-[20px] h-[20px]`}
            alt=""
          />
          <p className={`text-[14px] font-normal`}>
            {DashboardControllerMenu[0].title}
          </p>
        </Link>
      </nav>
    </aside>
  );
};
