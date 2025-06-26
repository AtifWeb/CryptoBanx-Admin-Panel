"use client";

import React, { useEffect, useState } from "react";
import { AsideAccount } from "./AsideAccount";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";

export const AccountHome = ({ index, setverify }: any) => {
  const [data, setdata] = useState<any>({});
  useEffect(() => {
    const data_getter = window.sessionStorage.getItem("data");

    if (data_getter) {
      setdata(JSON.parse(data_getter));
    }
  }, []);
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[20px] flex gap-[24px] account-page">
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
        <AsideAccount active={index} />
        <div className="flex-1 account-home-account">
          <h1 className="text-[18px] font-medium text-[#030915] mb-4">
            Your Account
          </h1>

          <div className="w-[542px] bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] p-5">
            <div className="flex items-center justify-between mb-[16px]">
              <h1 className="text-[16px] font-medium text-[#030915]">
                Profile Information
              </h1>
            </div>
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[14px] font-normal">
                Username: <span className="font-semibold">{data.username}</span>
              </li>
              <li className="text-[14px] font-normal">
                Email: <span className="font-semibold">{data.email}</span>
              </li>
              <li className="text-[14px] font-normal">
                Phone Number:{" "}
                <span className="font-semibold">
                  +{data.country_phone_code}
                  {data.phone}
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[542px] mt-[16px] bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] p-5">
            <div className="flex items-center justify-between mb-[16px]">
              <h1 className="text-[16px] font-medium text-[#030915]">
                Security Setting
              </h1>
            </div>
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[14px] font-normal">
                Two-Factor Authentication:{" "}
                {data.two_factor_type?.app.activated == true ||
                data.two_factor_type?.mail.activated == true ? (
                  <span className="font-semibold">Enabled</span>
                ) : (
                  <span className="font-semibold">Not Enabled</span>
                )}
              </li>
              <li className="text-[14px] font-normal">
                Linked Devices:
                <span className="font-semibold"> iPhone, MacBook</span>
              </li>
            </ul>
          </div>
          <div className="w-[542px] mt-[16px] bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] p-5">
            <div className="flex items-center justify-between mb-[16px]">
              <h1 className="text-[16px] font-medium text-[#030915]">
                Account Overview
              </h1>
            </div>
            <ul className="flex flex-col gap-[14px]">
              <li className="text-[14px] font-normal">
                Account ID:<span className="font-semibold"> {data.id}</span>
              </li>
              <li className="text-[14px] font-normal">
                Membership:<span className="font-semibold"> Premium</span>
              </li>
              <li className="text-[14px] font-normal">
                KYC Status:
                <span className="font-semibold">
                  {" "}
                  {data.validated == true ? "Verified" : "Not Verified"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
