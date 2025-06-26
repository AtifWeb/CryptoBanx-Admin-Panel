import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { get_admin_user_logs } from "@/api/admin";
export const LogTableOneUser = ({ notify }: any) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const link = window.location.href;

    const id = link.split("/")[5];
    get_admin_user_logs(
      window.sessionStorage.getItem("token"),
      setdata,
      id,
      notify
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
      </div>
    </div>
  );
};
