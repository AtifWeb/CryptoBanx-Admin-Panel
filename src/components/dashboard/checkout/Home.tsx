"use client";

import React, { useState } from "react";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { Button } from "@/components/ui/button";
import { AddCheckout } from "./AddCheckout";
import { CheckoutTable } from "./CheckoutTable";
import { CheckoutDetails } from "./CheckoutDetails";

type CheckoutItem = {
  Crypto: string;
  Date: string;
  Type: string;
  Amount: string;
  TransactionId: string;
  Status: string;
  Detail: string;
};

export const CheckoutHome = () => {
  const [addcheckout, setaddcheckout] = useState<boolean>(false);
  const [checkoutDetails, setcheckoutDetails] = useState<boolean>(false);
  const [checkoutlist, setcheckoutlist] = useState<CheckoutItem[]>([]);

  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <AddCheckout
        checkoutlist={checkoutlist}
        setcheckoutlist={setcheckoutlist}
        addcheckout={addcheckout}
        setaddcheckout={setaddcheckout}
      />
      <CheckoutDetails
        checkoutDetails={checkoutDetails}
        setcheckoutDetails={setcheckoutDetails}
      />
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">Checkout</h1>
          <div className="flex items-center gap-2">
            <button className="w-[34px] h-[34px] flex items-center justify-center bell-icon-wrapper rounded-full bg-[#fff]">
              <img
                src="/images/controls/bell.svg"
                className="bell-icon"
                alt=""
              />
            </button>

            <ModeSwitch />

            {/* user dropdown */}
            <UserDropdown />
          </div>
        </div>

        {checkoutlist.length > 0 && (
          <CheckoutTable
            checkout={checkoutlist}
            setcheckoutDetails={setcheckoutDetails}
          />
        )}
        {checkoutlist.length == 0 && (
          <div className="flex flex-col items-center justify-center bg-[#FFFFFF] h-[513px] rounded-[24px] border-[1px] border-[#F2F4F6]">
            <img src="/images/page/checkout.svg" className="mb-[50px]" alt="" />
            <p className="mb-[21px]">Checkout Page definitions are not made.</p>
            <Button
              onClick={() => {
                setaddcheckout(true);
              }}
              className="w-[174px] cursor-pointer h-[49px] rounded-[8px] text-[16px] text-[#0E121D] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
