import React from "react";
import Link from "next/link";
export const AsideAccount = ({ active }: any) => {
  return (
    <aside className="w-[230px] bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[16px] h-full p-4 flex flex-col gap-1 aside-account">
      <Link
        href="/account"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 1 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/account.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">Your account</p>
      </Link>
      {/* <Link
        href="/upload"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 2 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/upload.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">
          Upload document
        </p>
      </Link> */}
      {/* <Link
        href="/logs"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 3 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/log.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">Logs</p>
      </Link>
      <Link
        href="/fee"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 4 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/fee.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">Fees</p>
      </Link> */}
      <Link
        href="/logout"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 5 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/logout.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">Logout</p>
      </Link>
    </aside>
  );
};
