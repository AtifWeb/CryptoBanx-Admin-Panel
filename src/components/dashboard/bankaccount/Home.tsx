"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BtcDrawerWrapper } from "@/components/btc/BtcDrawerWrapper";
import { EthDrawerWrapper } from "@/components/eth/EthDrawerWrapper";
import { UsdWrapper } from "@/components/usd/UsdWrapper";
import { UsdWrapperReceive } from "@/components/usd/UsdWrapperReceive";
import { CreateAccount } from "./CreateAccount";
import { get_payd_account } from "@/api/user";

export const BankAccountHome = () => {
  const [btcOpen, setBtcOpen] = React.useState<boolean>(false);
  const [ethOpen, setethOpen] = React.useState<boolean>(false);
  const [usdOpen, setusdOpen] = React.useState<boolean>(false);
  const [usdReceiveOpen, setusdReceiveOpen] = React.useState<boolean>(false);
  const [create_account, setcreate_account] = useState<boolean>(false);
  const [accounts, setaccounts] = useState<any>([]);

  useEffect(() => {
    get_payd_account(window.sessionStorage.getItem("token"), setaccounts);
  }, []);

  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <CreateAccount
        create_account={create_account}
        setcreate_account={setcreate_account}
      />

      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">
            Bank Accounts
          </h1>
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

        <div className="grid grid-cols-3 gap-[16px] bank-accounts-page">
          {accounts.map((EachAccunt: any, key: any) => (
            <div
              key={key}
              className="bg-[#fff] flex flex-col justify-between p-[16px] rounded-[20px] box-shadow-dashboard"
            >
              <div className="flex items-center gap-[9px] mb-[16px]">
                <div
                  className={`w-[40px] h-[40px] rounded-full bg-[#0E121D] flex items-center justify-center ${
                    EachAccunt.actual_balance_currency == 2 &&
                    "bg-[transparent]"
                  }`}
                >
                  {EachAccunt.actual_balance_currency == 1 ? (
                    <img src="/images/icon/euro.svg" alt="" />
                  ) : (
                    <img src="/images/icon/gbp.svg" alt="" />
                  )}
                </div>
                <h1 className="text-[19px] font-medium text-[#030915]">
                  {EachAccunt.actual_balance_currency == 1 ? "EUR" : "GBP"}
                </h1>
              </div>
              <p className="text-[16px] font-bold text-[#000]">
                {EachAccunt.friendly_name}
              </p>
              <p className="text-[16px] font-normal text-[#525A65]">
                <span className="font-bold text-[#000]">Iban:</span>{" "}
                {EachAccunt.iban}
              </p>
            </div>
          ))}

          <div className="bg-[#fff] flex flex-col justify-between p-[16px] rounded-[20px] box-shadow-dashboard">
            <div className="flex items-center gap-[9px] mb-[16px]">
              <div className="w-[40px] h-[40px] rounded-full bg-[#0E121D] flex items-center justify-center">
                <img src="/images/icon/dollar.svg" alt="" />
              </div>
              <h1 className="text-[19px] font-medium text-[#030915]">USD</h1>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-normal text-[#525A65]">
                Don’t have account
              </p>
              <Button
                onClick={() => setcreate_account(true)}
                className="w-[98px] h-[36px] bg-[#01BC8D] rounded-[8px] text-[12px] font-normal text-[#FFFFFF]"
              >
                Create new
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* btc drawer wrapper */}
      <BtcDrawerWrapper btcOpen={btcOpen} setBtcOpen={setBtcOpen} />

      {/* Eth Wrapper */}
      <EthDrawerWrapper setethOpen={setethOpen} ethOpen={ethOpen} />

      {/* Usd Wrapper */}
      <UsdWrapper setusdOpen={setusdOpen} usdOpen={usdOpen} />

      <UsdWrapperReceive
        setusdReceiveOpen={setusdReceiveOpen}
        usdReceiveOpen={usdReceiveOpen}
      />
    </div>
  );
};
