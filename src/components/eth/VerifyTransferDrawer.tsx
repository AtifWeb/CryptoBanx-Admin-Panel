import React from "react";
import Input from "@mui/joy/Input";
import { Checkbox, Drawer } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const VerifyTransferDrawer = ({
  open,
  setopen,
  setAdressSentOpen,
  addressDefault,
  setorderSuccessOpen,
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
          Verify Transfer
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
           py-[16px] mb-[16px] rounded-[13px]"
        >
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Amount
                </h1>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.01 ETH
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Send Fee
                </h1>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.00001 ETH
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Wallet address
                </h1>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Kl445345345fgdfg
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Network
                </h1>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Ethereum
                </h1>
              </div>
            </div>
          </div>
        </div>

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
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Authenticator Code
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
          <div className="flex mt-1 items-center gap-2">
            <Checkbox />
            <p className="text-[12px] font-normal">
              I Agree to Term of Service and its return, refund and cancel
              policy
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end gap-2  pt-5">
          <Button
            onClick={() => {
              if (addressDefault) {
                setorderSuccessOpen(true);
              } else {
                setAdressSentOpen(true);
              }
            }}
            className="w-full cursor-pointer h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c]"
          >
            Complete Send
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
