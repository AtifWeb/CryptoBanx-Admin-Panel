import React from "react";
import { Chip, Drawer, Input, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const SendUSDDrawer = ({ open, setopen, setverifyTransferUSD }: any) => {
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
          Send USD
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
            <h1 className="text-[25px] font-medium">200</h1>
            <p className="text-[16px] font-normal text-[#525A65]">USD</p>
          </div>
          <div className="mb-[20px] flex items-center gap-1">
            <Chip
              variant="outlined"
              className="px-[10px] cursor-pointer py-[6px] text-[#525A65] !text-[10px] !rounded-[6px]"
            >
              Max: 300
            </Chip>
          </div>
        </div>

        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Reason For Teansfer
          </label>
          <div className="relative">
            <Input
              placeholder="Text here"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>
        </div>

        <div className="mt-3">
          <p className="text-[12px] font-normal mb-2">
            Upload supporting documents, e.g. invoice/agreement
          </p>
          <input type="file" id="screenshot-file" className="hidden" />
          <label
            htmlFor="screenshot-file"
            className="flex flex-col items-center justify-center gap-3 h-[116px] border-[1px] border-[#E1E6EB] rounded-[10px] cursor-pointer"
          >
            <img src="/images/drawer/file.svg" alt="" />
            <p className="text-[10px] text-[#525A65]">
              Drag and droo or browse to choose tile
            </p>
          </label>
        </div>
        <div className="flex-1 flex items-end  pt-5">
          <Button
            onClick={() => setverifyTransferUSD(true)}
            className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] cursor-pointer"
          >
            Preview Send
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
