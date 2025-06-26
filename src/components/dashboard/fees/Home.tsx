"use client";

import React, { useEffect, useState } from "react";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { PermissionTable } from "./PermissionTable";
import { get_customerfee_admin } from "@/api/admin";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export const AccountHome = () => {
  const [fees, setsetfees] = useState([]);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    let tokenadmin = window.sessionStorage.getItem("admintoken");

    get_customerfee_admin(
      {
        customer_fee_user_id: "cbx-us-1000021",
      },
      tokenadmin,
      setsetfees,
      notify
    );
  }, []);
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[20px]  account-page ">
        <div className="flex items-center  justify-between mb-[21px]">
          <h1 className="text-[20px] font-medium text-[#030915]">
            Admin Customer Fees
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
        <div className="flex gap-[24px]">
          <div className="flex-1 account-home-account ">
            <PermissionTable fees={fees} setsetfees={setsetfees} />
          </div>
        </div>
      </div>
    </div>
  );
};
