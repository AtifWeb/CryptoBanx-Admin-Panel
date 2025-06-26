import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_user_fiats, get_user_payd_accounts } from "@/api/admin";
export const AccountInfoTable = ({ notify }: any) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const link = window.location.href;

    const id = link.split("/")[5];

    get_user_payd_accounts(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
      {
        get_payd_accounts_user_id: id,
      }
    );
  }, []);
  return (
    <div className="bg-[#fff] w-full border-[1px] border-[#F2F4F6] rounded-[24px] mt-[16px]">
      <div>
        <Table className=" px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]   uppercase">
                  Friendly Name
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Bank Name
              </TableHead>
              <TableHead className="text-[#030915] text-[12px]  font-normal uppercase">
                Account Holder Name
              </TableHead>

              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Bank Country
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Bank Address
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((EachRow: any, key) => (
              <TableRow key={key} className={`h-[53px] `}>
                <TableCell className="text-[#030915] pl-[23px]  text-[14px]  font-semibold">
                  {EachRow.friendly_name}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.bank_name}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.bank_account_holder_name}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.bank_country}
                </TableCell>

                <TableCell className="text-[#030915]   text-[14px]  font-normal">
                  {EachRow.bank_address}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length == 0 && (
          <h1 className="text-center py-10 font-bold">
            No Any Account Info Found
          </h1>
        )}
      </div>
    </div>
  );
};
