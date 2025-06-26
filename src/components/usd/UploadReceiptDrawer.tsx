import React from "react";
import { Chip, Drawer, Input, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const UploadReceiptDrawer = ({
  open,
  setopen,
  setorderSuccessfully,
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
          Upload Receipt
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="mt-3">
          <p className="text-[12px] font-normal mb-2">
            Please Upload a Payment Receipt
          </p>
          <input type="file" id="screenshot-file" className="hidden" />
          <label
            htmlFor="screenshot-file"
            className="flex flex-col items-center justify-center gap-3 h-[116px] border-[1px] border-[#E1E6EB] rounded-[10px] cursor-pointer"
          >
            <img src="/images/drawer/file.svg" alt="" />
            <p className="text-[10px] text-[#525A65]">
              DDrag and droo or browse to choose tile
            </p>
          </label>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-end  pt-5">
          <Button
            onClick={() => setorderSuccessfully(true)}
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
