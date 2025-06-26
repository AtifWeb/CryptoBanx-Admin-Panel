import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { get_affiliate_users } from "@/api/affiliate";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
export const AffiliateTable = () => {
  const [data, setdata] = useState([]);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    get_affiliate_users(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);
  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] px-[30px] pb-[10px] overflow-auto">
      {showpreloader && <ApiLoader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]">
        Affiliate Users
      </h1>

      <div>
        <Table className="min-w-[1000px] px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 !border-0">
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Email
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Username
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Country
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Company
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Phone
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Address
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Date Joined
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Earning
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((eachdata: any, key: any) => (
              <TableRow key={key} className={`h-[53px]`}>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.email}
                </TableCell>

                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.username}
                </TableCell>

                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.country_long_name}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-medium">
                  {eachdata.uci_company_name
                    ? eachdata.uci_company_name
                    : "Not Given"}
                </TableCell>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.phone}
                </TableCell>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.uha_address}
                </TableCell>

                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.date_joined.split(" ")[0]}
                </TableCell>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  <Link
                    href={`/affiliate/earning/${eachdata.id}&${
                      eachdata.date_joined.split(" ")[0]
                    }`}
                    className="w-[80px] cursor-pointer h-[30px] rounded-[8px] text-[13px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c] flex items-center justify-center"
                  >
                    Earning
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {data.length == 0 && (
          <div className="flex justify-center pt-8 pb-8">
            {not_found ? (
              <h1 className="text-[20px] font-bold">
                No Affiliate Users Found
              </h1>
            ) : (
              <h1 className="text-[20px] font-bold">
                Fetching Affiliate Users....
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
