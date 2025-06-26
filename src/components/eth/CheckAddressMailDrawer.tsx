import React from "react";
import { Drawer } from "@mui/joy";
export const CheckAddressMailDrawer = ({ open, setopen }: any) => {
  const toggleReceived =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setopen(inOpen);
    };

  return (
    <Drawer
      open={open}
      className="w-[390px]"
      anchor="right"
      onClose={toggleReceived(false)}
    >
      <div className="flex items-center px-[24px] border-b-[1px] border-b-[#EEF0F2] py-[20px] h-[75px]">
        <button
          onClick={() => setopen(false)}
          className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#EEF0F2] cursor-pointer "
        >
          <img src="/images/drawer/arrow.svg" alt="" />
        </button>
        <p className="text-[#030915] ml-2 text-[16px] flex-1 font-normal">
          Check Mail
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div
          className="border-[1px] border-[#E1E6EB] px-[12px]
           py-[16px] pb-[30px] rounded-[13px]"
        >
          <img
            src="/images/drawer/warning.svg"
            className="mx-auto mb-2"
            alt=""
          />
          <h1 className="text-[24px] text-center text-[#030915]">
            Check Your Mail
          </h1>
          <p className="text-[14px] text-center py-[16px] font-normal text-[#030915]">
            Declaration form send successfully
          </p>
          <p className="text-[14px] text-center font-normal text-[#525A65]">
            Please review and sign the document in your email to whitelist your
            address. Please note your withdrawed address will only protest one
            the redress has been approved by compliance.
          </p>
        </div>
      </div>
    </Drawer>
  );
};
