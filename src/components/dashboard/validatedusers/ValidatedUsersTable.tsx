import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_admin_validation_user } from "@/api/admin";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
export const ValidatedUsersTable = () => {
  const [data, setdata] = useState([]);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    get_admin_validation_user(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
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
        Validated Users
      </h1>

      <div>
        {data.length == 0 ? (
          <div className="flex justify-center pt-8 pb-8">
            <h1 className="text-[20px] font-bold">Not Any Validated Found</h1>
          </div>
        ) : (
          <Table className="min-w-[1000px] px-0">
            <TableHeader>
              <TableRow className="h-[49px] px-0 !border-0">
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Email
                </TableHead>
                <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                  Username
                </TableHead>
                <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                  User Phone
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Citizenship
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Date Joined
                </TableHead>
                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Last Login
                </TableHead>

                <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((eachdata: any) => (
                <TableRow key={eachdata.id} className={`h-[53px]`}>
                  <TableCell className="text-[#030915]  text-[16px]  font-medium">
                    {eachdata.email}
                  </TableCell>

                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.username ? eachdata.username : "Not Given"}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.phone ? eachdata.phone : "Not Given"}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.citizenship ? eachdata.citizenship : "Not Given"}
                  </TableCell>
                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.date_joined ? eachdata.date_joined : "Not Given"}
                  </TableCell>

                  <TableCell className="text-[#525A65] text-[16px]  font-normal">
                    {eachdata.last_login ? eachdata.last_login : "Not Given"}
                  </TableCell>

                  <TableCell>
                    <Link
                      href={`/request/user/${eachdata.id}`}
                      className="w-[80px] cursor-pointer h-[30px] rounded-full text-[13px] text-[#FFFFFF] bg-[#383a39] hover:bg-[#131313] flex items-center justify-center"
                    >
                      Details
                    </Link>
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
