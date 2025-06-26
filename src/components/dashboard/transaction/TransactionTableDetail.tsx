import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_users_transactions_detail } from "@/api/admin";

export const TransactionTableDetail = ({ notify }: any) => {
  const [transactions, settransactions] = useState([]);
  const [transactionsback, settransactionsback] = useState([]);
  useEffect(() => {
    if (transactions.length > 0 && transactionsback.length == 0) {
      settransactionsback(transactions);
    }
  }, [transactions]);

  useEffect(() => {
    get_users_transactions_detail(
      window.sessionStorage.getItem("token"),
      settransactions,
      notify
    );
  }, []);

  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px]  pt-[20px] px-[30px] pb-[10px] overflow-auto">
      <div>
        {transactions.length == 0 ? (
          <div className="flex justify-center pt-8 pb-8">
            <h1 className="text-[20px] font-bold">No Transaction Found</h1>
          </div>
        ) : (
          <Table className="min-w-[1000px] px-0">
            <TableHeader>
              <TableRow className="h-[49px] px-0 !border-0">
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  User ID
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Amount
                </TableHead>
                <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                  Amount Currency
                </TableHead>
                <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                  Fee
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Fee Currency
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Created By
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  IBAN
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((eachdata: any) => (
                <TableRow key={eachdata.id} className={`h-[53px]`}>
                  <TableCell className="text-[#030915]  text-[16px]  font-medium">
                    {eachdata.user_id}
                  </TableCell>

                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.amount_value}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.amount_currency_long_text}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.cb_fee}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.cb_fee_currency_short_text}
                  </TableCell>

                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.create_date}
                  </TableCell>

                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.iban}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};
