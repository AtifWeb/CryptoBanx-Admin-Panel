import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog } from "@mui/joy";
import Link from "next/link";
import { Activate2fa } from "@/api/auth";

export const TwoFA = ({ settwofa, twofa, notify }: any) => {
  const [code, setcode] = useState("");
  const [active, setactive] = useState(false);
  return (
    <Modal open={twofa} onClose={() => settwofa(false)}>
      <ModalDialog className="w-[446px] !p-0 !rounded-[16px]">
        <div className="flex items-center  px-[24px] pt-4">
          <button
            onClick={() => settwofa(false)}
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#F7F5EE] cursor-pointer ml-auto"
          >
            <svg
              onClick={() => settwofa(false)}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.375 4.43213L4.625 13.1821"
                stroke="#676A72"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.625 4.43213L13.375 13.1821"
                stroke="#676A72"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-[50px]">
          <img
            src="/images/modal/lock.svg"
            className="mb-[56px] mx-auto"
            alt=""
          />
          <h1 className="text-[22px] text-center font-semibold text-[#1B1E27]">
            Two - step verification
          </h1>
          <p className="text-[16px] mb-[35px]  mx-auto mt-3 text-[#454850] font-normal text-center">
            Thanks for keeping your account secure. Check your mail:{" "}
            <span className="text-[#050A18] font-semibold">
              *******@gmail.com
            </span>
          </p>

          <div>
            <label
              className="text-[14px] font-medium text-[#1B1E27] mb-2"
              htmlFor="#"
            >
              Your verification Code
            </label>
            <Input
              placeholder="6- digit code"
              className="h-[42px] text-[14px] font-normal  mb-[24px]"
              type="text"
              value={code}
              onChange={(e) => {
                setcode(e.target.value);
              }}
            />
          </div>

          <div className="pb-[50px]">
            <Button
              onClick={() => {
                Activate2fa(
                  {
                    two_factor_type: "mail",
                    user_type: "user",
                    two_factor_code: code,
                  },
                  window.sessionStorage.getItem("token"),
                  settwofa,
                  setactive,
                  notify
                );
              }}
              className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]"
            >
              {active ? (
                <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#3793D2]"></div>
              ) : (
                "Confirm"
              )}
            </Button>
            <p className="text-[#454850] text-[12px] font-normal mt-2">
              Remember this device.{" "}
              <Link href="/" className="text-[12px] text-[#050A18] font-medium">
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
