import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_users_transactions } from "@/api/admin";
import { Input } from "@mui/joy";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";

export const TransactionTable = () => {
  const [transactions, settransactions] = useState([]);
  const [transactionsback, settransactionsback] = useState([]);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    if (transactions.length > 0 && transactionsback.length == 0) {
      settransactionsback(transactions);
    }
  }, [transactions]);

  useEffect(() => {
    get_users_transactions(
      window.sessionStorage.getItem("token"),
      settransactions,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);

  const filteruser = (searchText: string) => {
    let value = searchText.toLowerCase();
    setnot_found(true);
    const filtered = transactionsback.filter(
      (transaction: any) =>
        transaction.user_id.toLowerCase().includes(value) ||
        transaction.create_date.toLowerCase().includes(value) ||
        transaction.iban.toLowerCase().includes(value)
    );

    settransactions(filtered);
  };

  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] px-[30px] pb-[10px] overflow-auto">
      {showpreloader && <ApiLoader />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />

      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]">
        Users Transactions
      </h1>

      <div className="mb-3">
        <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
          Search Transaction
        </label>
        <Input
          placeholder="Search By User ID/DATE/IBAN"
          className="h-[42px] text-[14px] font-normal"
          onChange={(e: any) => filteruser(e.target.value)}
        />
      </div>

      <div>
        {transactions.length == 0 ? (
          <div className="flex justify-center pt-8 pb-8">
            {not_found ? (
              <h1 className="text-[20px] font-bold">No Transaction Found</h1>
            ) : (
              <h1 className="text-[20px] font-bold">
                Fetching Transactions....
              </h1>
            )}
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
