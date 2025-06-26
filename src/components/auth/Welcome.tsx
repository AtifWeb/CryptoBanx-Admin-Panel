import { Checkbox, Input } from "@mui/joy";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Welcome = ({ setstep }: any) => {
  return (
    <div className="w-[650px] register px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <img src="/images/aside/logo.svg" className="mb-[51px]" alt="" />

      <h1 className="text-[#030915] font-semibold text-[26px]">
        Welcome to the official Cryptobanx platform experience.
      </h1>
      <p className="text-[#525A65] text-[14px] block mt-8">
        Please select type of account you would like to register for:
      </p>

      <div className="flex items-center buttons-wrapper-register gap-2 my-4">
        <Button
          onClick={() => setstep(3)}
          variant="outline"
          className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
        >
          Personal
        </Button>
        <Button
          onClick={() => setstep(4)}
          className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r from-[#194EAD] to-[#3793D2]"
        >
          Company
        </Button>
      </div>

      <Link
        href="/"
        className="text-[#030915] back-to-login text-[14px] font-normal "
      >
        Back to login
      </Link>
    </div>
  );
};
