import React from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog, Option, Select } from "@mui/joy";
export const CheckoutDetails = ({
  checkoutDetails,
  setcheckoutDetails,
}: any) => {
  return (
    <Modal open={checkoutDetails} onClose={() => setcheckoutDetails(false)}>
      <ModalDialog className="w-[942px] modal-checkout-details h-[629px] !p-0 !grid grid-cols-2 !gap-0">
        <div className="bg-[#DCDBDE] h-full w-full px-[60px] pt-[80px] pb-[43px] flex flex-col items-start">
          <img
            src="/images/modal/black-popup.svg"
            className="mb-[43px]"
            alt=""
          />
          <h1 className="text-[16px] text-[#525A65] font-normal">Total Due</h1>
          <p className="text-[20px] font-semibold text-[#030915] mt-5 flex-1">
            220.58 USDT
          </p>

          <div className="w-full">
            <div className="flex items-center gap-2 mb-[16px]">
              <span className="bg-gradient-to-r from-[#000000] to-[transparent] flex-1 h-[1px]"></span>
              <p className="text-[16px] text-[#030915] font-medium">
                Or QR code
              </p>
              <span className="bg-gradient-to-l from-[#000000] to-[transparent] flex-1 h-[1px]"></span>
            </div>
            <img src="/images/modal/qr.svg" className="mx-auto" alt="" />
          </div>
        </div>
        <div className="bg-[#fff] h-full w-full pt-[80px]">
          <div className="flex items-center justify-between px-[40px]">
            <h1 className="text-[16px] text-[#525A65]">ABC Service </h1>
            <p className="text-[16px] font-medium text-[#030915]">99 USDT</p>
          </div>
          <div className="flex items-center justify-between px-[40px] mt-4">
            <h1 className="text-[16px] text-[#525A65]">Subtotal </h1>
            <p className="text-[16px] font-medium text-[#030915]">99 USDT</p>
          </div>
          <div className="flex items-center justify-between px-[40px] mt-5 pt-5 border-t-[1px] border-t-[#E1E6EB] mb-[100px]">
            <h1 className="text-[16px] text-[#525A65]">Total Due </h1>
            <p className="text-[16px] font-medium text-[#030915]">99 USDT</p>
          </div>
          <div className="px-[40px]">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Payment Wallet Address
            </label>
            <Input
              placeholder="0x435345345345"
              className="h-[42px] text-[14px] font-normal"
            />
          </div>
          <div className="px-[40px] mt-4 mb-[24px]">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Your Wallet Address
            </label>
            <Input
              placeholder="0x2334fDFG4353sd"
              className="h-[42px] text-[14px] font-normal"
            />
          </div>

          <div className="px-[40px]">
            <Button
              onClick={() => setcheckoutDetails(false)}
              className="w-full cursor-pointer h-[52px] rounded-full text-[16px] text-[#0E121D] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              Check Now
            </Button>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
