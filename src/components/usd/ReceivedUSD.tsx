import React, { useState } from "react";
import Input from "@mui/joy/Input";
import { Checkbox, Drawer, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const ReceivedUSD = ({ open, setopen, setUploadReceipt }: any) => {
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
      <div className="flex items-center px-[24px] border-b-[1px] border-b-[#EEF0F2] py-[20px]">
        <button
          onClick={() => setopen(false)}
          className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#EEF0F2] cursor-pointer "
        >
          <img src="/images/drawer/arrow.svg" alt="" />
        </button>
        <p className="text-[#030915] ml-2 text-[16px] flex-1 font-normal">
          Receive USD
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="flex flex-col gap-[12px] mb-[16px]">
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Bank Name
            </label>
            <div className="relative">
              <Input
                placeholder="ABC bank"
                className="h-[45px] text-[14px] font-normal"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Account Number
            </label>
            <div className="relative">
              <Input
                placeholder="1233456789"
                className="h-[45px] text-[14px] font-normal"
                readOnly
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Swift/BIC Code
            </label>
            <div className="relative">
              <Input
                placeholder="Swift/BIC Code"
                className="h-[45px] text-[14px] font-normal"
                readOnly
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              IBAN
            </label>
            <Input
              placeholder="IBAN"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>

          <div className="border-[1px] border-[#E1E6EB] px-[20px] py-[16px] rounded-[10px]">
            <h1 className="text-[16px] font-medium text-[#030915] text-center mb-2">
              Attention
            </h1>
            <p className="text-[12px] text-[#525A65] text-center">
              Please make the transfer to the above account in USD only and
              write your customer number in the description field.
            </p>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Your Customer ID
            </label>
            <Input
              placeholder="Your Customer ID"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-3 items-end  pt-5">
          <Button
            onClick={() => setUploadReceipt(true)}
            className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] cursor-pointer"
          >
            Upload The Transfer Receipt
          </Button>
          <Button
            onClick={() => setopen(false)}
            variant="outline"
            className="w-full cursor-pointer h-[52px] rounded-full text-[16px] text-[#525A65] "
          >
            Cancel
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
