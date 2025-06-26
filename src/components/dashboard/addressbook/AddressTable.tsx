import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  addressTableUtil,
  addressTableUtilFiat,
} from "@/utils/components/AddressBook";
import { Checkbox } from "@mui/joy";
export const AddressTable = () => {
  return (
    <div className="bg-[#fff] rounded-[24px] mt-[21px] pt-[30px] pb-[10px] border-[1px] border-[#F2F4F6] overflow-auto address-table">
      <div className="mb-[20px]">
        <div className="relative">
          <div className="flex active-btn-wrapper absolute right-7 top-1 items-center gap-2 address-book-icons">
            <button className="w-[36px] cursor-pointer h-[36px] border-[1px] border-[#E1E6EB] flex items-center justify-center hover:bg-[#00000009]  rounded-full">
              <img src="/images/icon/plus.svg" alt="" />
            </button>
            <button className="w-[36px] cursor-pointer h-[36px] border-[1px] border-[#E1E6EB] flex items-center justify-center hover:bg-[#00000009]   rounded-full">
              <img src="/images/icon/pen.svg" alt="" />
            </button>
            <button className="w-[36px] cursor-pointer h-[36px] border-[1px] border-[#E1E6EB] flex items-center justify-center hover:bg-[#00000009]    rounded-full">
              <img src="/images/icon/tick.svg" alt="" />
            </button>
          </div>
          <Tabs defaultValue="crypto">
            <TabsList className="h-[45px] ml-[30px] tab-list-address  bg-[transparent] border-[1px] border-[#EEF0F2] rounded-full">
              <TabsTrigger
                value="crypto"
                className="h-[41px] cursor-pointer rounded-full px-[18px]"
              >
                Send Crypto
              </TabsTrigger>
              <TabsTrigger
                value="fiat"
                className="h-[41px] cursor-pointer rounded-full px-[18px]"
              >
                Send Fiat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto">
              <Table className="min-w-[1000px] crypto-table px-0">
                <TableHeader className="crypto-header">
                  <TableRow className="h-[49px]  border-b-[#E1E6EB] ">
                    <TableHead className="pl-[50px]">
                      <p className="text-[#030915] text-[14px]  font-normal uppercase">
                        Name
                      </p>
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                      Token
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                      Network
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                      Wallet address
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                      Whitelist status
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                      Declaration form
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase pr-[20px]">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {addressTableUtil.map((Eachaddress, key) => (
                    <TableRow key={key} className={`h-[58px]`}>
                      <TableCell className="text-[#030915] pl-[24px]  text-[16px]  font-medium">
                        <div className="flex items-center gap-2">
                          <Checkbox size="sm" />
                          {Eachaddress.name}
                        </div>
                      </TableCell>

                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.token}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.network}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.walletaddress}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.whiteliststatus}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.declarationform}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        <div className=" bg-[#DDF9EB] w-[70px]  justify-center inline-flex rounded-full">
                          <p className="text-[#1DD477]  text-[12px] font-normal px-[10px] py-[8px]">
                            {Eachaddress.status}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="fiat">
              <Table className="min-w-[1000px] crypto-table px-0">
                <TableHeader className="crypto-header">
                  <TableRow className="h-[49px]  border-b-[#E1E6EB]">
                    <TableHead className="pl-[50px]">
                      <p className="text-[#030915] text-[14px]  font-normal uppercase">
                        Name
                      </p>
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                      Currency
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                      Bank Account
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                      BIC/Swift
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                      Bank name
                    </TableHead>
                    <TableHead className="text-[#030915] text-[14px]  font-normal uppercase pr-[20px]">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {addressTableUtilFiat.map((Eachaddress, key) => (
                    <TableRow key={key} className={`h-[58px]`}>
                      <TableCell className="text-[#030915] pl-[24px]  text-[16px]  font-medium">
                        <div className="flex items-center gap-2">
                          <Checkbox size="sm" />
                          {Eachaddress.name}
                        </div>
                      </TableCell>

                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.currency}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.bankaccount}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.swift}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        {Eachaddress.bankname}
                      </TableCell>
                      <TableCell className="text-[#525A65] text-[16px]  font-normal">
                        <div className=" bg-[#DDF9EB] w-[70px]  justify-center inline-flex rounded-full">
                          <p className="text-[#1DD477]  text-[12px] font-normal px-[10px] py-[8px]">
                            {Eachaddress.status}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
