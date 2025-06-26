import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const UserDropdown = () => {
  const [data, setdata] = useState<any>({});

  useEffect(() => {
    let data_getter = window.sessionStorage.getItem("data");

    if (data_getter) {
      setdata(JSON.parse(data_getter));
    }
  }, []);

  return (
    <div className="dropdown-custom flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/images/avatar/avatar.svg" alt="" />
            <p className="text-[#030915] text-[16px]">
              {data?.first_name} {data?.last_name}
            </p>
            <img src="/images/icon/arrow.svg" alt="" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-[20px] user-dropdown pt-[20px] pb-[16px] px-[20px]">
          <DropdownMenuLabel className="flex  border-b-[1px] border-b-[#E1E6EA] pb-[16px] mb-[10px] items-center gap-[10px]">
            <img src="/images/avatar/avatar.svg" alt="" />
            <div>
              <h1 className="text-[16px] font-medium text-[#030915]">
                {data?.first_name} {data?.last_name}
              </h1>
              <p className="text-[12px] font-normal text-[#525A65]">
                {data?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuLabel className="p-0">
            <Link
              href="/account"
              className="flex h-[36px] px-[10px] rounded-[5px] items-center gap-2 hover:bg-[#0000000b]"
            >
              <img
                src="/images/icon/account.svg"
                className="w-[16px] h-[16px]"
                alt=""
              />
              <p>Your account</p>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className="p-0">
            <Link
              href="/upload"
              className="flex h-[36px] px-[10px] rounded-[5px] items-center gap-2 hover:bg-[#0000000b]"
            >
              <img
                src="/images/icon/upload.svg"
                className="w-[16px] h-[16px]"
                alt=""
              />
              <p>Upload document</p>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className="p-0">
            <Link
              href="/logs"
              className="flex h-[36px] px-[10px] rounded-[5px] items-center gap-2 hover:bg-[#0000000b]"
            >
              <img
                src="/images/icon/log.svg"
                className="w-[16px] h-[16px]"
                alt=""
              />
              <p>Logs</p>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className="p-0">
            <Link
              href="/fee"
              className="flex h-[36px] px-[10px] rounded-[5px] items-center gap-2 hover:bg-[#0000000b]"
            >
              <img
                src="/images/icon/fee.svg"
                className="w-[16px] h-[16px]"
                alt=""
              />
              <p>Fees</p>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className="p-0">
            <Link
              href="/"
              className="flex h-[36px] px-[10px] rounded-[5px] items-center gap-2 hover:bg-[#0000000b]"
            >
              <img
                src="/images/icon/logout.svg"
                className="w-[16px] h-[16px]"
                alt=""
              />
              <p>Logout</p>
            </Link>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>

      <img
        src="/images/icon/bar.svg"
        className="hidden bar-burger"
        onClick={() => {
          document
            .querySelector(".aside-dashboard")
            ?.classList.toggle("active");
        }}
        alt=""
      />
    </div>
  );
};
