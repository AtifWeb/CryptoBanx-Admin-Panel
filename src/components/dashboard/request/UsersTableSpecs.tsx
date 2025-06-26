import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const UsersTableSpecs = ({ data, not_found }: any) => {
  const UserRequestTypes = (type: any) => {
    if (type == 1) {
      return "Validate Account";
    } else if (type == 2) {
      return "Create Wallet";
    } else if (type == 3) {
      return "Create Bank Account";
    } else if (type == 4) {
      return "Validate Transaction";
    } else if (type == 5) {
      return "Send Money To Client";
    } else if (type == 6) {
      return "Send Money To Beneficiary";
    } else if (type == 7) {
      return "Buy Crypto";
    } else if (type == 8) {
      return "Sell Crypto";
    }
  };

  const UserRequestStates = (type: any) => {
    if (type == 1) {
      return "Requested";
    } else if (type == 2) {
      return "Approved";
    } else if (type == 3) {
      return "Rejected";
    }
  };

  const get_currency = (type: any) => {
    if (type == 1) {
      return "EUR";
    } else if (type == 2) {
      return "GBP";
    }
  };

  const fetchName = (data: string) => {
    const data_json = JSON.parse(data);
    console.log(data_json);

    if (data_json.senderName) {
      return data_json.senderName;
    } else if (data_json.friendly_name) {
      return data_json.friendly_name;
    } else {
      return data_json.username;
    }
  };

  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] px-[30px] pb-[10px] overflow-auto">
      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]">
        Specific User Requests
      </h1>

      <div>
        <Table className="min-w-[1000px] px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Sender Name
                </p>
              </TableHead>
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Request Time
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Request Type
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                State Type
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Currency
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Responded
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((EachRow: any) => (
              <TableRow key={EachRow.id} className={`h-[53px]`}>
                <TableCell className="text-[#525A65] pl-5 text-[14px]  font-semibold">
                  {fetchName(EachRow.request_data)}
                </TableCell>
                <TableCell className="text-[#525A65] pl-5 text-[14px]  font-semibold">
                  {EachRow.request_time.split(".")[0]}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {UserRequestTypes(EachRow.request_type)}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {UserRequestStates(EachRow.state_type)}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {EachRow.currency
                    ? get_currency(EachRow.currency)
                    : "Not Given"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {EachRow.responded == true ? "Yes" : "No"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length == 0 && (
          <div className="flex justify-center pt-8 pb-8">
            {not_found ? (
              <h1 className="text-[20px] font-bold">No User Request Found</h1>
            ) : (
              <h1 className="text-[20px] font-bold">
                Fetching User Request....
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
