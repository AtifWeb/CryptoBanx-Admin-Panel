"use client";

import React from "react";
import { LogTable } from "./LogTable";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";

export const AccountHome = () => {
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[30px] flex gap-[24px] account-page">
        <div className="items-center hidden justify-between mb-[21px]">
          <img src="/images/icon/mobile-icon.svg" alt="" />
          <div className="flex items-center gap-2">
            <button className="w-[34px] h-[34px] flex items-center justify-center bell-icon-wrapper rounded-full bg-[#fff]">
              <img
                src="/images/controls/bell.svg"
                className="bell-icon"
                alt=""
              />
            </button>

            <ModeSwitch />

            {/* user dropdown */}
            <UserDropdown />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-[20px] font-medium text-[#030915] mb-4">
            Account Logs
          </h1>
          <LogTable />
        </div>
      </div>
    </div>
  );
};
