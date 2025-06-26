"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { Notification } from "@/components/common/Notification";
import React, { useEffect, useState } from "react";
import { get_spec_user_request } from "@/api/admin";
import { UsersTableSpecs } from "./UsersTableSpecs";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
export const HomeDetail = () => {
  const [data, setdata] = useState([]);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    const link = window.location.href;

    const id = link.split("/")[4];
    console.log(id);

    get_spec_user_request(
      window.sessionStorage.getItem("token"),
      id,
      setdata,
      notify,
      setshowpreloader
    );
  }, []);
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      {showpreloader && <ApiLoader />}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">
            Specific User Requests
          </h1>
          <div className="flex items-center gap-2">
            <Notification />

            <ModeSwitch />

            {/* user dropdown */}
            <UserDropdown />
          </div>
        </div>

        <UsersTableSpecs data={data} not_found={not_found} />
      </div>
    </div>
  );
};
