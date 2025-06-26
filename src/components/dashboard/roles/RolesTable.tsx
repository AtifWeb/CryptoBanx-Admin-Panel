import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EditRoles } from "./EditRoles";
import { Checkbox } from "@mui/joy";
export const RolesTable = () => {
  const [addfee, setaddfee] = useState<boolean>(false);

  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px]  pt-[15px] px-[15px] pb-[10px] overflow-auto">
      <EditRoles addfee={addfee} setaddfee={setaddfee} />

      <div>
        <Table className="px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 !border-0">
              <TableHead>
                <div className="flex items-center gap-2">Name</div>
              </TableHead>
              <TableHead className="text-[#030915] text-right text-[14px] font-normal uppercase">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className={`h-[53px]`}>
              <TableCell className="text-[#030915]  text-[16px]  font-medium">
                <div className="flex items-center gap-2">Administrator</div>
              </TableCell>

              <TableCell className="text-[#525A65]  text-[16px] text-right  font-normal">
                <img
                  src="/images/icon/dots.svg"
                  alt=""
                  className="inline-block cursor-pointer"
                  onClick={() => setaddfee(true)}
                />
              </TableCell>
            </TableRow>
            <TableRow className={`h-[53px]`}>
              <TableCell className="text-[#030915]  text-[16px]  font-medium">
                <div className="flex items-center gap-2">Developer</div>
              </TableCell>
              <TableCell className="text-[#525A65]  text-[16px] text-right  font-normal">
                <img
                  src="/images/icon/dots.svg"
                  alt=""
                  className="inline-block cursor-pointer"
                  onClick={() => setaddfee(true)}
                />
              </TableCell>
            </TableRow>
            <TableRow className={`h-[53px]`}>
              <TableCell className="text-[#030915]  text-[16px]  font-medium">
                <div className="flex items-center gap-2">Robot</div>
              </TableCell>

              <TableCell className="text-[#525A65]  text-[16px] text-right  font-normal">
                <img
                  src="/images/icon/dots.svg"
                  alt=""
                  className="inline-block cursor-pointer"
                  onClick={() => setaddfee(true)}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
