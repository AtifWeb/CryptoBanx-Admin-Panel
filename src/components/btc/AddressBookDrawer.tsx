import React from "react";
import { Chip, Drawer, Input } from "@mui/joy";
export const AddressBookDrawer = ({
  open,
  setopen,
  setTransferOpen,
  setaddressDefault,
}: any) => {
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
          Choose Address From Address Book
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="relative">
          <img
            src="/images/drawer/search.svg"
            alt=""
            className="absolute left-0 top-0"
          />
          <Input
            placeholder="Search address"
            className="h-[42px] text-[12px] font-normal !border-[#E1E6EB] mb-4"
          />
        </div>

        <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px]  rounded-[16px]">
          <div>
            <h1 className="text-[14px] text-[#030915] font-medium">
              Myself Binance
            </h1>
            <p className="text-[11px] font-normal text-[#525A65]">
              Myself Binance
            </p>
          </div>
          <p>ETH</p>

          <button
            onClick={() => {
              setTransferOpen(true);
              setaddressDefault(true);
            }}
            className="text-[12px] rounded-[6px] cursor-pointer text-[#01BC8D] bg-[#E6F8F4] w-[69px] h-[32px] flex items-center justify-center"
          >
            Select
          </button>
        </div>
        <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px]  rounded-[16px]">
          <div>
            <h1 className="text-[14px] text-[#030915] font-medium">
              Myself Binance
            </h1>
            <p className="text-[11px] font-normal text-[#525A65]">
              Myself Binance
            </p>
          </div>
          <p>ETH</p>

          <button
            onClick={() => {
              setTransferOpen(true);
              setaddressDefault(true);
            }}
            className="text-[12px] rounded-[6px] cursor-pointer text-[#01BC8D] bg-[#E6F8F4] w-[69px] h-[32px] flex items-center justify-center"
          >
            Select
          </button>
        </div>
        <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px]  rounded-[16px]">
          <div>
            <h1 className="text-[14px] text-[#030915] font-medium">
              Myself Binance
            </h1>
            <p className="text-[11px] font-normal text-[#525A65]">
              Myself Binance
            </p>
          </div>
          <p>ETH</p>

          <button
            onClick={() => {
              setTransferOpen(true);
              setaddressDefault(true);
            }}
            className="text-[12px] rounded-[6px] cursor-pointer text-[#01BC8D] bg-[#E6F8F4] w-[69px] h-[32px] flex items-center justify-center"
          >
            Select
          </button>
        </div>
      </div>
    </Drawer>
  );
};
