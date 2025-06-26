"use client";

import React, { useEffect, useState } from "react";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { PermissionTable } from "./PermissionTable";
import { get_customerfee_admin } from "@/api/admin";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";

export const AccountHome = () => {
  const [fees, setsetfees] = useState([]);
  const notify = (message: string) => toast.success(message);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  useEffect(() => {
    let tokenadmin = window.sessionStorage.getItem("token");

    const url = window.location.href;
    const customer_fee_user_id = url.split("/").pop();

    get_customerfee_admin(
      {
        customer_fee_user_id: customer_fee_user_id,
      },
      tokenadmin,
      setsetfees,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      {showpreloader && <ApiLoader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[20px]  account-page ">
        <div className="flex items-center  justify-between mb-[21px]">
          <h1 className="text-[20px] font-medium text-[#030915]">
            Customer Fees
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
            <PermissionTable
              not_found={not_found}
              fees={fees}
              setsetfees={setsetfees}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
