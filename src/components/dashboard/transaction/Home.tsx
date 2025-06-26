"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { Notification } from "@/components/common/Notification";
import { TransactionTable } from "./TransactionTable";
import React from "react";
export const DashboardHome = () => {
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">
            Users Transactions
          </h1>
          <div className="flex items-center gap-2">
            <Notification />

            <ModeSwitch />

            {/* user dropdown */}
            <UserDropdown />
          </div>
        </div>

        <TransactionTable />
      </div>
    </div>
  );
};
