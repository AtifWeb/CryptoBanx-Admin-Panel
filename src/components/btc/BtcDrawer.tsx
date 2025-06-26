import React from "react";
import { Drawer } from "@mui/joy";
export const BtcDrawer = ({
  open,
  setopen,
  setSendOpen,
  setbuyOpen,
  setreceivedOpen,
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
          BTC Account
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
          <div className="w-full flex flex-col items-center justify-center h-[93.8px] bg-[#030915] rounded-[12px] mb-[16px]">
            <h1 className="text-[25px] font-medium text-[#fff]">0.49098 BTC</h1>
            <p className="text-[14px] font-normal text-[#CDCED0]">$33071.73</p>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div
              onClick={() => setreceivedOpen(true)}
              className="flex btc-drawer-option cursor-pointer flex-col items-center justify-center h-[78px] w-full border-[1px] border-[#E1E6EB] rounded-[10px]"
            >
              <div className="w-[33px] h-[33px] flex items-center justify-center bg-[#EEF0F2] rounded-full">
                <img src="/images/drawer/plus.svg" alt="" />
              </div>
              <p className="mt-[6px] text-[12px] text-[#525A65]">Receive</p>
            </div>

            <div
              onClick={() => setSendOpen(true)}
              className="flex btc-drawer-option cursor-pointer flex-col items-center justify-center h-[78px] w-full border-[1px] border-[#E1E6EB] rounded-[10px]"
            >
              <div className="w-[33px] h-[33px] flex items-center justify-center bg-[#EEF0F2] rounded-full">
                <img src="/images/drawer/up.svg" alt="" />
              </div>
              <p className="mt-[6px] text-[12px] text-[#525A65]">Send</p>
            </div>

            <div
              onClick={() => setbuyOpen(true)}
              className="flex btc-drawer-option cursor-pointer flex-col items-center justify-center h-[78px] w-full border-[1px] border-[#E1E6EB] rounded-[10px]"
            >
              <div className="w-[33px] h-[33px] flex items-center justify-center bg-[#EEF0F2] rounded-full">
                <img src="/images/drawer/down.svg" alt="" />
              </div>
              <p className="mt-[6px] text-[12px] text-[#525A65]">Buy</p>
            </div>

            <div className="flex btc-drawer-option cursor-pointer flex-col items-center justify-center h-[78px] w-full border-[1px] border-[#E1E6EB] rounded-[10px]">
              <div className="w-[33px] h-[33px] flex items-center justify-center bg-[#EEF0F2] rounded-full">
                <img src="/images/drawer/sell.svg" alt="" />
              </div>
              <p className="mt-[6px] text-[12px] text-[#525A65]">Sell</p>
            </div>
          </div>
        </div>

        <div
          className="border-[1px] border-[#E1E6EB] px-[12px]
           py-[16px] mb-[16px] rounded-[13px]"
        >
          <h1 className="text-[16px] text-[#030915] mb-[20px]">Market</h1>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#030915] text-[25px] font-medium">
                $65456.11
              </p>
              <p className="text-[14px] text-[#525A65]">$33071.73</p>
            </div>
            <span className="text-[12px] font-normal text-[#02BD8E] px-[10px] py-[8px] rounded-full bg-[#DDF9EB]">
              +6.22%
            </span>
          </div>
        </div>

        <div
          className="border-[1px] border-[#E1E6EB] px-[12px]
           py-[16px] mb-[16px] rounded-[13px]"
        >
          <h1 className="text-[16px] text-[#030915] mb-[12px]">Transactions</h1>
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">Buy</h1>
                <p className="text-[12px] text-[#525A65]">Today</p>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.023 BTC
                </h1>
                <p className="text-[12px] text-[#525A65]">$1549.25</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">
                  Withdraw
                </h1>
                <p className="text-[12px] text-[#525A65]">Yesterday</p>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.023 BTC
                </h1>
                <p className="text-[12px] text-[#525A65]">$1549.25</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">Buy</h1>
                <p className="text-[12px] text-[#525A65]">Today</p>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.023 BTC
                </h1>
                <p className="text-[12px] text-[#525A65]">$1549.25</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#030915] text-[14px] font-normal">Sell</h1>
                <p className="text-[12px] text-[#525A65]">Today</p>
              </div>
              <div className="text-right">
                <h1 className="text-[#030915] text-[14px] font-normal">
                  0.023 BTC
                </h1>
                <p className="text-[12px] text-[#525A65]">$1549.25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
