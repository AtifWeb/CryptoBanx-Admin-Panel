import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Checkbox } from "@mui/joy";

export const CheckoutTable = ({ checkout, setcheckoutDetails }: any) => {
  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] pb-[10px]">
      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]  px-[30px]">
        Transaction History
      </h1>

      <div className="px-[22px]">
        <Table className="min-w-[1000px] px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 !border-0">
              <TableHead>
                <div className="flex items-center gap-2">
                  <Checkbox size="sm" />
                  <p className="text-[#030915] text-[14px]  font-normal uppercase">
                    Crypto
                  </p>
                </div>
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Date
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Type
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Amount
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Transaction ID
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Status
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Detail
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {checkout.map((EachCheckout: any, key: number) => (
              <TableRow key={key} className={`h-[53px]`}>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">
                    <Checkbox size="sm" />
                    {EachCheckout.Crypto}
                  </div>
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachCheckout.Date}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachCheckout.Type}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachCheckout.Amount}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachCheckout.TransactionId}
                </TableCell>

                <TableCell>
                  <div className=" bg-[#DFF8E0] gap-1 inline-flex rounded-full">
                    <p className="text-[#1ABD1A] text-[12px] font-normal px-[10px] py-[8px]">
                      {EachCheckout.Status}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-[#1DD477] text-[16px]  font-normal">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      setcheckoutDetails(true);
                    }}
                    href={EachCheckout.Detail}
                  >
                    Detail
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
