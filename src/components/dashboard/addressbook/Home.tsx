"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import React from "react";
import { AddressTable } from "./AddressTable";

export const Addressbook = () => {
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">
            Address Book
          </h1>
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

        {/* table */}
        <AddressTable />
      </div>
    </div>
  );
};
