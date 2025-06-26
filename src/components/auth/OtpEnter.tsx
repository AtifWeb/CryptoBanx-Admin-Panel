import React from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog } from "@mui/joy";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const OtpEnter = ({ settwofa, twofa }: any) => {
  const router = useRouter();
  return (
    <Modal
      open={twofa}
      onClose={() => {
        router.push("/login");
        settwofa(false);
      }}
    >
      <ModalDialog className="w-[446px] !p-0 !rounded-[16px]">
        <div className="flex items-center  px-[24px] pt-4">
          <button
            onClick={() => {
              router.push("/login");
              settwofa(false);
            }}
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#F7F5EE] cursor-pointer ml-auto"
          >
            <svg
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
            Email verification
          </h1>
          <p className="text-[16px] mb-[60px]  mx-auto mt-3 text-[#454850] font-normal text-center">
            We want to verify you email. Check your mail:{" "}
            <span className="text-[#050A18] font-semibold">
              *******@gmail.com
            </span>
          </p>
        </div>
      </ModalDialog>
    </Modal>
  );
};
