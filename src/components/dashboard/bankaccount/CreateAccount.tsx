import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog, Select, Option } from "@mui/joy";
import { create_payd_account } from "@/api/user";

export const CreateAccount = ({ create_account, setcreate_account }: any) => {
  const [friendly_name, setfriendly_name] = useState("");
  const [active, setactive] = useState(false);

  const [currency, setcurrency] = useState("GBP");
  const handleCurrecny = (value: any) => {
    setcurrency(value.target.textContent);
  };

  return (
    <Modal open={create_account} onClose={() => setcreate_account(false)}>
      <ModalDialog className="w-[390px] !p-0">
        <div className="flex items-center border-b-[1px] border-b-[#E1E6EB] px-[24px] py-4 mb-[16px]">
          <button
            onClick={() => setcreate_account(false)}
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#EEF0F2] cursor-pointer "
          >
            <img src="/images/drawer/arrow.svg" alt="" />
          </button>
          <h1 className="text-[16px] flex-1 ml-2 font-normal text-[#0E121D]">
            Create Account
          </h1>
          <img
            onClick={() => setcreate_account(false)}
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
              Friendly Name
            </label>
            <Input
              placeholder="Enter Friendly Name"
              className="h-[42px] text-[14px] font-normal"
              value={friendly_name}
              onChange={(e) => setfriendly_name(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Currency
            </label>
            <Select defaultValue="GBP" className="h-[45px]">
              <Option value="GBP" onClick={handleCurrecny}>
                GBP
              </Option>
              <Option value="EUR" onClick={handleCurrecny}>
                EUR
              </Option>
            </Select>
          </div>
          <div className="mt-6 mb-7">
            <Button
              onClick={() => {
                create_payd_account(
                  {
                    currency: currency,
                    friendly_name: friendly_name,
                    transaction_category: "OTHER",
                    iban_country: "GB",
                    domestic: false,
                  },
                  window.sessionStorage.getItem("token"),
                  setactive,
                  setcreate_account
                );
              }}
              className="w-full cursor-pointer h-[52px] rounded-full text-[16px] text-[#0E121D] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              {active ? (
                <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#2aa284]"></div>
              ) : (
                "Create Account"
              )}
            </Button>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
