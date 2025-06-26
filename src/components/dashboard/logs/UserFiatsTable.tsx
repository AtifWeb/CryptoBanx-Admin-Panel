import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_user_fiats } from "@/api/admin";
export const UserFiatsTable = ({ notify }: any) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const link = window.location.href;

    const id = link.split("/")[5];

    get_user_fiats(window.sessionStorage.getItem("token"), setdata, notify, {
      get_specific_user_fiats_user_id: id,
      get_specific_user_fiats_from_date: "04-03-2025",
    });
  }, []);
  return (
    <div className="bg-[#fff] w-full border-[1px] border-[#F2F4F6] rounded-[24px] mt-[16px]">
      <div>
        <Table className=" px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]   uppercase">
                  Txn Month
                </p>
              </TableHead>
              <TableHead>
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Month Actual Sum
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Actual Balance Currency
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Month Available Sum
              </TableHead>
              <TableHead className="text-[#030915] text-[12px]  font-normal uppercase">
                Available Balance Currency
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((EachRow: any, key) => (
              <TableRow key={key} className={`h-[53px] `}>
                <TableCell className="text-[#030915] pl-[23px]  text-[14px]  font-semibold">
                  {EachRow.txn_month.split(" ")[0]}
                </TableCell>
                <TableCell className="text-[#030915]   text-[14px]  font-normal">
                  {EachRow.monthly_actual_sum}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.actual_balance_currency == "1" ? "EUR" : "GBP"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.monthly_available_sum}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.available_balance_currency == "1" ? "EUR" : "GBP"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length == 0 && (
          <h1 className="text-center py-10 font-bold">No Any Fiats Found</h1>
        )}
      </div>
    </div>
  );
};
