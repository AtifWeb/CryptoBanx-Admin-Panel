"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BtcDrawerWrapper } from "@/components/btc/BtcDrawerWrapper";
import { EthDrawerWrapper } from "@/components/eth/EthDrawerWrapper";
import { UsdWrapper } from "@/components/usd/UsdWrapper";
import { UsdWrapperReceive } from "@/components/usd/UsdWrapperReceive";
import { get_users_fiat } from "@/api/user";

export const WalletHome = () => {
  const [btcOpen, setBtcOpen] = React.useState<boolean>(false);
  const [ethOpen, setethOpen] = React.useState<boolean>(false);
  const [usdOpen, setusdOpen] = React.useState<boolean>(false);
  const [fiat, setfiat] = React.useState([]);

  const [usdReceiveOpen, setusdReceiveOpen] = React.useState<boolean>(false);

  useEffect(() => {
    get_users_fiat(window.sessionStorage.getItem("token"), setfiat);
  }, []);

  const coins = [
    {
      img: "/images/coins/btc.svg",
      coinname: "Bitcoin",
      type: "BTC",
      opening: () => setBtcOpen(true),
    },
    {
      img: "/images/coins/eth.svg",
      coinname: "Ethereum",
      type: "ETH",
      opening: () => setethOpen(true),
    },
    {
      img: "/images/coins/tron.svg",
      coinname: "Tron",
      type: "TRX",
      opening: () => {},
    },
    {
      img: "/images/coins/tether.svg",
      coinname: "Tether",
      type: "USDT",
      opening: () => {},
    },
    {
      img: "/images/coins/eth.svg",
      coinname: "Ethereum",
      type: "ETH",
      opening: () => setethOpen(true),
    },
    {
      img: "/images/coins/btc.svg",
      coinname: "Bitcoin",
      type: "BTC",
      opening: () => setBtcOpen(true),
    },

    {
      img: "/images/coins/tether.svg",
      coinname: "Tether",
      type: "USDT",
      opening: () => {},
    },
    {
      img: "/images/coins/tron.svg",
      coinname: "Tron",
      type: "TRX",
      opening: () => {},
    },
  ];

  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA]  overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <h1 className="font-medium text-[20px] text-[#020911]">My Wallet</h1>
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

        <div className="grid grid-cols-4 wallet-boxes-grid gap-[20px]">
          <div className="px-[30px] py-[24px] relative bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[24px] col-span-2 h-[175px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h1 className="text-[#525A65] font-medium text-[16px] uppercase">
                My value
              </h1>
              <span className="text-[12px] font-normal text-[#525A65] px-[12px] py-[6px] bg-[#F7F8FA] rounded-full asset">
                Asset
              </span>
            </div>
            <h1 className="text-[40px] text-[#030915] font-semibold">
              $45500.00
            </h1>

            <div className="flex  months-graph items-end gap-1 absolute right-[30px] bottom-[30px]">
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Jul</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[38px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Aug</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[50px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Sep</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[31px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Oct</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[38px] rounded-[4px]"></span>
              </div>
            </div>
          </div>

          <div className="px-[30px] py-[24px] relative bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[24px] col-span-2 h-[175px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h1 className="text-[#525A65] font-medium text-[16px] uppercase">
                My value
              </h1>
              <span className="text-[12px] font-normal text-[#525A65] px-[12px] py-[6px] bg-[#F7F8FA] rounded-full asset">
                Asset
              </span>
            </div>
            <h1 className="text-[40px] text-[#030915] font-semibold">
              $45500.00
            </h1>

            <div className="flex  months-graph items-end gap-1 absolute right-[30px] bottom-[30px]">
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Jul</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[38px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Aug</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[50px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Sep</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[31px] rounded-[4px]"></span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[10px] text-[#525A65]">Oct</p>
                <span className="bg-gradient-to-b from-[#069D79] to-[#fff] w-[30px] block h-[38px] rounded-[4px]"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="gap-[21px] wallet-tabs-wrapper mt-[21px]">
          <div className="bg-[#fff] p-[24px] w-full h-full rounded-[24px]">
            <div className="tabs-dashboard">
              <Tabs defaultValue="crypto">
                <TabsList className="h-[45px] rounded-full">
                  <TabsTrigger
                    value="crypto"
                    className="h-[41px] cursor-pointer rounded-full px-[18px]"
                  >
                    Crypto
                  </TabsTrigger>
                  <TabsTrigger
                    value="fiat"
                    className="h-[41px] cursor-pointer rounded-full px-[18px]"
                  >
                    Fiat
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="crypto">
                  <div className="grid grid-cols-4 wallet-tabs-wrapper-content gap-[16px]">
                    {coins.map((eachCoin, key) => (
                      <div
                        key={key}
                        className="p-[16px] bg-[#FFFFFF] border-[1px] border-[#f2f4f61e] rounded-[24px] flex flex-col h-[241px]  box-shadow-dashboard"
                      >
                        <div className="flex-1 ">
                          <div className="flex items-center gap-3">
                            <img
                              src={eachCoin.img}
                              className="w-[60px] h-[60px]"
                              alt=""
                            />
                            <div>
                              <h1 className="text-[#030915]  font-medium text-[18px]">
                                {eachCoin.coinname}
                              </h1>
                              <p className="text-[14px] text-[#525A65] font-normal">
                                {eachCoin.type}
                              </p>
                            </div>
                          </div>
                        </div>
                        <h1 className="text-[30px] text-[#030915] font-semibold">
                          0.49098
                        </h1>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <Button
                            onClick={() => eachCoin.opening()}
                            className="bg-[transparent] border-[1px] border-[#E1E6EB] text-[14px] font-normal cursor-pointer text-[#030915] hover:text-[#fff] send-btn"
                          >
                            Send
                          </Button>
                          <Button className="bg-[transparent] border-[1px] border-[#E1E6EB] text-[14px] font-normal cursor-pointer text-[#030915] hover:text-[#fff] send-btn">
                            Receive
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="fiat">
                  <div className="grid grid-cols-3 wallet-tabs-wrapper-content gap-[16px]">
                    {fiat.map((Eachfiat: any, key) => (
                      <div
                        key={key}
                        className="p-[16px] bg-[#FFFFFF] border-[1px] border-[#f2f4f61e] rounded-[24px] flex flex-col  h-[220px]  box-shadow-dashboard"
                      >
                        <div>
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-[60px] h-[60px] bg-[#0E121D] rounded-full flex items-center justify-center content-div ${
                                Eachfiat.actual_balance_currency == "2" &&
                                "bg-[transparent]"
                              }`}
                            >
                              {Eachfiat.actual_balance_currency == "1" ? (
                                <img
                                  src="/images/icon/euro.svg"
                                  className="w-[27px] h-[27px]"
                                  alt=""
                                />
                              ) : (
                                <img
                                  src="/images/icon/gbp.svg"
                                  className="!w-[60px] !h-[60px]"
                                  alt=""
                                />
                              )}
                            </div>

                            <h1 className="text-[#030915]  font-medium text-[20px]">
                              {Eachfiat.actual_balance_currency == "1"
                                ? "EUR"
                                : "GBP"}
                            </h1>
                          </div>
                        </div>
                        <h1 className="text-[30px] mt-[35px] mb-[15px] text-[#030915] font-semibold">
                          {Eachfiat.monthly_available_sum.toFixed(2)}
                        </h1>

                        <div className="grid grid-cols-2 gap-3">
                          <Button
                            onClick={() => setusdOpen(true)}
                            className="bg-[transparent] border-[1px] border-[#E1E6EB] text-[14px] font-normal cursor-pointer text-[#030915] hover:text-[#fff] send-btn"
                          >
                            Send
                          </Button>
                          <Button
                            onClick={() => setusdReceiveOpen(true)}
                            className="bg-[transparent] border-[1px] border-[#E1E6EB] text-[14px] font-normal cursor-pointer text-[#030915] hover:text-[#fff] receive-btn"
                          >
                            Receive
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
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
