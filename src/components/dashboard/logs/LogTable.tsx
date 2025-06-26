import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { admin_user_login_logs } from "@/api/admin";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
export const LogTable = () => {
  const [data, setdata] = useState([]);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    admin_user_login_logs(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);
  return (
    <div className="bg-[#fff] w-full border-[1px] border-[#F2F4F6] rounded-[24px] mt-[16px]">
      {showpreloader && <ApiLoader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <div>
        <Table className=" px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]   uppercase">
                  User ID
                </p>
              </TableHead>
              <TableHead>
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Date
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Action
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                IP Address
              </TableHead>
              <TableHead className="text-[#030915] text-[12px]  font-normal uppercase">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((EachRow: any) => (
              <TableRow key={EachRow.id} className={`h-[53px] `}>
                <TableCell className="text-[#030915] pl-[23px]  text-[14px]  font-semibold">
                  {EachRow.user_id}
                </TableCell>
                <TableCell className="text-[#030915]   text-[14px]  font-normal">
                  {EachRow.attempt_time.split(".")[0]}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.message}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.ip_address}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-normal">
                  {EachRow.success == true && (
                    <div className="px-[10px] py-[6px] bg-[#DDF9EB] text-center rounded-[5px] w-[100px]">
                      <p className="text-[#1DD477]">Successfull</p>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length == 0 && (
          <div className="flex justify-center pt-8 pb-8">
            {not_found ? (
              <h1 className="text-[20px] font-bold">No Log Found</h1>
            ) : (
              <h1 className="text-[20px] font-bold">Fetching Logs....</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
