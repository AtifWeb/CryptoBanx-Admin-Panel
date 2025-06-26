"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AsideAccount } from "../account/AsideAccount";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";

export const AccountHome = () => {
  return (
    <div className="flex-1 upload-account-home pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
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

        <AsideAccount active={2} />
        <div className="flex-1">
          <h1 className="text-[18px] font-medium text-[#030915] mb-4">
            Upload Document
          </h1>

          <div className="w-[533px] upload-account-home-box h-[250px] bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] flex flex-col items-center justify-center gap-[16px] mb-3">
            <div className="w-[60px] h-[60px] bg-[#EEF0F2] rounded-full flex items-center justify-center">
              <img
                src="/images/icon/upload.svg"
                className="w-[20px] h-[20px]"
                alt=""
              />
            </div>
            <p className="text-[14px] tex-[#525A65]">
              Drag and drop file or{" "}
              <span className="text-[14px] text-[#525A65] font-bold">
                Choose File
              </span>
            </p>
          </div>

          <div className="flex items-center justify-between w-[533px] mb-[20px]">
            <p className="text-[14px] font-normal text-[#525A65]">
              Supported formats: XLS, XLSX|
            </p>
            <p className="text-[14px] font-normal text-[#525A65]">
              Maximum size: 25MB
            </p>
          </div>

          <div className="flex items-center buttons-upload-wrapper w-[533px] gap-[12px] justify-end">
            <Button
              variant="outline"
              className="w-[98px] cursor-pointer h-[49px] rounded-[8px] text-[16px] text-[#525A65] "
            >
              Cancel
            </Button>
            <Button className="w-[129px] cursor-pointer h-[49px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c]">
              Create new
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
