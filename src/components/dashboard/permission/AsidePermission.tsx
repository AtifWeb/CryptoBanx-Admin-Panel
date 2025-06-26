import React from "react";
import Link from "next/link";
export const AsidePermission = ({ active }: any) => {
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
        <p className="text-[14px] font-normal text-[#030915]">Permission</p>
      </Link>
      <Link
        href="/upload"
        className={`flex items-center gap-2 h-[45px] px-[12px] rounded-[10px] ${
          active == 2 &&
          "bg-gradient-to-tr from-[#E1E5EC] to-[#F7F8FA] active-aside-account"
        } `}
      >
        <img src="/images/icon/upload.svg" alt="" />
        <p className="text-[14px] font-normal text-[#030915]">User Roles</p>
      </Link>
    </aside>
  );
};
