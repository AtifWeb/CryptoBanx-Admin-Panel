import React from "react";
import Input from "@mui/joy/Input";
import { Checkbox, Drawer, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const AddBtcAddressDrawer = ({
  open,
  setopen,
  setTransferOpen,
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
          Add BTC Address
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="flex flex-col gap-[12px]">
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              SMS Verification Code
            </label>
            <div className="relative">
              <Input
                placeholder="123456"
                className="h-[45px] text-[14px] font-normal"
              />
              <button className="text-[12px] absolute cursor-pointer right-3 bottom-3 font-medium text-[#1ABD1A]">
                Get Code
              </button>
            </div>
          </div>
          <div>
            <Select defaultValue="BTC" className="h-[45px]">
              <Option value="BTC">BTC</Option>
              <Option value="ETH">ETH</Option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Wallet Address
            </label>
            <Input
              placeholder="Kl445345345fgdfg"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>
          <div className="flex mt-1 items-center gap-2">
            <Checkbox />
            <p className="text-[12px] font-normal">
              I’m the owner of this wallet address
            </p>
          </div>

          <div className="mt-3">
            <p className="text-[12px] font-normal mb-2">
              Please upload a screenshot or video to prove you are the owner the
              address
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
        </div>

        <div className="flex-1 flex items-end  pt-5">
          <Button
            onClick={() => setTransferOpen(true)}
            className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] cursor-pointer"
          >
            Continue
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
