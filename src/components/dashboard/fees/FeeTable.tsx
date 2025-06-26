import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FeeUtil } from "@/utils/components/Tables";
export const FeeTable = () => {
  return (
    <div className="bg-[#fff] w-full border-[1px] border-[#F2F4F6] rounded-[24px] mt-[16px]">
      <div>
        <Table className=" px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Transaction Type
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Fee
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                IP Effective
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {FeeUtil.map((EachRow, key) => (
              <TableRow key={key} className={`h-[53px] `}>
                <TableCell className="text-[#030915] pl-[23px]  text-[14px]  font-normal">
                  {EachRow.TransactionType}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.Fee}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.IPEffective}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
