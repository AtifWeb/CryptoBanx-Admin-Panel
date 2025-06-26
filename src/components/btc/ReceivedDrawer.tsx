import React from "react";
import Input from "@mui/joy/Input";
import { Drawer } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const ReceivedDrawer = ({ open, setopen }: any) => {
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
          Receive BTC
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="border-[1px] mb-[17px] border-[#E1E6EB] px-[16px] py-[16px] rounded-[16px]">
          <img
            src="/images/drawer/qr.svg"
            className="w-[137px] mx-auto mb-[24px]"
            alt=""
          />

          <div className="border-[1px] border-[#E1E6EB] px-[12px] h-[49px] rounded-[8px] flex items-center justify-between">
            <p className="text-[14px] text-[#525A65]">Kl445345345fgdfg</p>

            <button className="flex items-center gap-2">
              <p className="text-[12px] text-[#030915]">Copy</p>
              <img src="/images/drawer/copy.svg" alt="" />
            </button>
          </div>
        </div>

        <div
          className="flex items-center gap-2 border-[1px] border-[#E1E6EB] px-[12px]
           py-[16px] mb-[16px] rounded-[13px]"
        >
          <img src="/images/drawer/alert.svg" alt="" />
          <p className="text-[12px] text-[#525A65]">
            To receive payment, you need to add the sender's account to your
            address book.
          </p>
        </div>

        <h2 className="text-[16px] text-[#030915] mb-[16px]">
          Add BTC Address for Receive
        </h2>

        <div className="flex flex-col gap-[12px]">
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Save as
            </label>
            <Input
              placeholder="Save as"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Network
            </label>
            <Input
              placeholder="BTC"
              className="h-[45px] text-[14px] font-normal"
            />
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
        </div>

        <div className="flex-1 flex items-end  pt-5">
          <Button className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01bc8d] ">
            Save
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
