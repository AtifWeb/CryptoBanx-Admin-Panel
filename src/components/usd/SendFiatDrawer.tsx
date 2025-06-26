import React, { useState } from "react";
import Input from "@mui/joy/Input";
import { Checkbox, Drawer, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";
export const SendFiatDrawer = ({ open, setopen, setSendUSD }: any) => {
  const [checkbox, setcheckbox] = useState<string>("myself");

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
          Send Fiat
        </p>
        <img
          onClick={() => setopen(false)}
          src="/images/drawer/close.svg"
          className="cursor-pointer"
          alt=""
        />
      </div>

      <div className="py-[17px] px-[24px] flex flex-col flex-1">
        <div className="flex flex-col gap-[12px] mb-[16px]">
          <div className="flex items-center justify-between gap-[10px]">
            <label
              htmlFor="#"
              onClick={() => setcheckbox("myself")}
              className={`px-[16px] py-2 border-[1px] border-[#E1E6EB] rounded-[8px] text-[14px] text-[#030915] cursor-pointer flex-1 text-center ${
                checkbox == "myself" && "!bg-[#01BC8D] !text-[#fff]"
              }`}
            >
              Myself
            </label>
            <label
              htmlFor="#"
              onClick={() => setcheckbox("individuals")}
              className={`px-[16px] py-2 border-[1px] border-[#E1E6EB] rounded-[8px] text-[14px] text-[#030915] cursor-pointer flex-1 text-center ${
                checkbox == "individuals" && "!bg-[#01BC8D] !text-[#fff]"
              }`}
            >
              Individuals
            </label>
            <label
              htmlFor="#"
              onClick={() => setcheckbox("business")}
              className={`px-[16px] py-2 border-[1px] border-[#E1E6EB] rounded-[8px] text-[14px] text-[#030915] cursor-pointer flex-1 text-center ${
                checkbox == "business" && "!bg-[#01BC8D] !text-[#fff]"
              }`}
            >
              Business
            </label>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Account type
            </label>
            <Select defaultValue="International USD Swift" className="h-[45px]">
              <Option value="International USD Swift">
                International USD Swift
              </Option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Save Whitelist Name As
            </label>
            <div className="relative">
              <Input
                placeholder="Text here"
                className="h-[45px] text-[14px] font-normal"
              />
            </div>
          </div>
          <h1 className="text-[16px] text-[#030915]">Recipient’s Details</h1>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <Input
                placeholder="First Name"
                className="h-[45px] text-[14px] font-normal"
                readOnly
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <Input
                placeholder="Last Name"
                className="h-[45px] text-[14px] font-normal"
                readOnly
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Relationship to Beneficiary
            </label>
            <Input
              placeholder="Relationship to Beneficiary"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>

          <div className="mt-3">
            <p className="text-[14px] font-normal mb-2">
              Upload supporting documents, e.g. invoice/agreement
            </p>
            <input type="file" id="screenshot-file" className="hidden" />
            <label
              htmlFor="screenshot-file"
              className="flex flex-col items-center justify-center gap-3 h-[116px] border-[1px] border-[#E1E6EB] rounded-[10px] cursor-pointer"
            >
              <img src="/images/drawer/file.svg" alt="" />
              <p className="text-[12px] text-[#525A65]">
                Drag and droo or browse to choose tile
              </p>
            </label>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Address Line 1
            </label>
            <Input
              placeholder="Address Line 1"
              className="h-[45px] text-[14px] font-normal"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              IBAN
            </label>
            <div className="relative">
              <Input
                placeholder="Address Line 1"
                className="h-[45px] text-[14px] font-normal"
              />
              <button className="text-[12px] absolute cursor-pointer right-3 bottom-3 font-medium text-[#1ABD1A]">
                Check
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-end  pt-5">
          <Button
            onClick={() => setSendUSD(true)}
            className="w-full h-[52px] rounded-full text-[16px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] cursor-pointer"
          >
            Continue
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
