import React from "react";
import { Chip, Drawer, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const BuyBtcDrawer = ({ open, setopen, settransferBuyOpen }: any) => {
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
        <div className="relative">
          <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px] rounded-[16px]">
            <h1 className="text-[25px] font-medium">0.01</h1>
            <p className="text-[16px] font-normal text-[#525A65]">BTC</p>
          </div>

          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#01BC8D] absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <img src="/images/drawer/swap.svg" alt="" />
          </button>

          <div className="border-[1px] flex items-center justify-between mb-[8px] border-[#E1E6EB] px-[16px] py-[16px] rounded-[16px]">
            <h1 className="text-[25px] font-medium">11000</h1>
            <Select defaultValue="USD" className="h-[37px]">
              <Option value="USD" className="text-[14px] text-[#525A65]">
                USD
              </Option>
              <Option value="EUR" className="text-[14px] text-[#525A65]">
                EUR
              </Option>
            </Select>
          </div>
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
        <div className="flex-1 flex items-end  pt-5">
          <Button
            onClick={() => settransferBuyOpen(true)}
            className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] cursor-pointer"
          >
            Preview Buy
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
