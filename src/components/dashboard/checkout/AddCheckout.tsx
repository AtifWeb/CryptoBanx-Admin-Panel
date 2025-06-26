import React from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog, Option, Select } from "@mui/joy";
export const AddCheckout = ({
  addcheckout,
  setaddcheckout,
  setcheckoutlist,
  checkoutlist,
}: any) => {
  return (
    <Modal open={addcheckout} onClose={() => setaddcheckout(false)}>
      <ModalDialog className="w-[390px] !p-0">
        <div className="flex items-center border-b-[1px] border-b-[#E1E6EB] px-[24px] py-4 mb-[16px]">
          <button
            onClick={() => setaddcheckout(false)}
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#EEF0F2] cursor-pointer "
          >
            <img src="/images/drawer/arrow.svg" alt="" />
          </button>
          <h1 className="text-[16px] flex-1 ml-2 font-normal text-[#0E121D]">
            Apply Checkout
          </h1>
          <img
            onClick={() => setaddcheckout(false)}
            src="/images/drawer/close.svg"
            className="cursor-pointer"
            alt=""
          />
        </div>

        <div className="px-[24px]">
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Web Site
            </label>
            <Input
              placeholder="Web Site link here..."
              className="h-[42px] text-[14px] font-normal"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Wallet
            </label>
            <Select defaultValue="Metamask" className="h-[45px]">
              <Option value="Metamask">Metamask</Option>
            </Select>
          </div>
          <div className="mt-6 mb-7">
            <Button
              onClick={() => {
                setcheckoutlist([
                  ...checkoutlist,
                  {
                    Crypto: "Bitcoin",
                    Date: "23-10-2024",
                    Type: "Buy",
                    Amount: "0.02 BTC",
                    TransactionId: "Tx1234abcdegfu...",
                    Status: "Completed",
                    Detail: "/",
                  },
                ]);
                setaddcheckout(false);
              }}
              className="w-full cursor-pointer h-[52px] rounded-full text-[16px] text-[#0E121D] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              Save now
            </Button>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
