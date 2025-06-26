import React from "react";
import { Chip, Drawer } from "@mui/joy";
export const SendBtcDrawer = ({
  open,
  setopen,
  setBtcAddressOpen,
  setaddressBookOpen,
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
          Send BTC
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px] rounded-[16px]">
          <h1 className="text-[25px] font-medium">0.01</h1>
          <p className="text-[16px] font-normal text-[#525A65]">BTC</p>
        </div>

        <div className="mb-[20px] flex items-center gap-1">
          <Chip
            variant="outlined"
            className="px-[10px] cursor-pointer py-[6px] text-[#525A65] !text-[10px] !rounded-[6px]"
          >
            Min: 0.01
          </Chip>
          <Chip
            variant="outlined"
            className="px-[10px] cursor-pointer py-[6px] text-[#525A65] !text-[10px] !rounded-[6px]"
          >
            Max: 0.4509
          </Chip>
        </div>

        <div
          onClick={() => {
            setBtcAddressOpen(true);
            setaddressDefault(false);
          }}
          className="border-[1px] flex items-center justify-between mb-[17px] border-[#E1E6EB] px-[16px] py-[16px] cursor-pointer rounded-[16px] hover:border-[#01bc8d] hover:bg-[#e6f8f4]"
        >
          <div>
            <h1 className="text-[14px] text-[#030915] font-medium">
              New Transfer
            </h1>
            <p className="text-[11px] font-normal text-[#525A65]">
              Make a transfer by adding a new wallet address
            </p>
          </div>
          <img src="/images/drawer/arrow-right.svg" alt="" />
        </div>

        <div
          onClick={() => {
            setaddressBookOpen(true);
            setaddressDefault(true);
          }}
          className="border-[1px] flex items-center justify-between mb-[17px] border-[#E1E6EB] px-[16px] py-[16px] cursor-pointer rounded-[16px] hover:border-[#01bc8d] hover:bg-[#e6f8f4]"
        >
          <div>
            <h1 className="text-[14px] text-[#030915] font-medium">
              Address Book
            </h1>
            <p className="text-[11px] font-normal text-[#525A65]">
              Make a transfer to a saved address
            </p>
          </div>
          <img src="/images/drawer/arrow-right.svg" alt="" />
        </div>
      </div>
    </Drawer>
  );
};
