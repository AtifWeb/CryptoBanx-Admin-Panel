import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AddFee } from "./AddFee";
import { UpdateFee } from "./UpdateFee";
export const CustomerFeeTable = ({ fees, setsetfees }: any) => {
  const [addfee, setaddfee] = useState<boolean>(false);
  const [updatefee, setupdatefee] = useState<boolean>(false);
  const [updatedatafee, setupdatedatafee] = useState({});

  const getfeeType = (feetype: number) => {
    let type = "";
    switch (feetype) {
      case 1:
        type = "Percentage";
        break;
      case 2:
        type = "Fixed";
        break;
      case 3:
        type = "Percentage And Fixed";
        break;
    }

    return type;
  };
  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px]  pt-[15px] px-[15px] pb-[10px] overflow-auto">
      <AddFee
        addfee={addfee}
        fees={fees}
        setaddfee={setaddfee}
        setsetfees={setsetfees}
      />
      <UpdateFee
        updatedatafee={updatedatafee}
        addfee={updatefee}
        fees={fees}
        setaddfee={setupdatefee}
        setsetfees={setsetfees}
      />
      <div>
        <Table className="px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 !border-0">
              <TableHead>
                <p className="text-[#030915] text-[14px]  font-normal uppercase">
                  Fee type
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Min Amount
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Max Amount
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Percentage
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Fixed
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fees.map((EachFee: any) => (
              <TableRow key={EachFee.id} className={`h-[53px]`}>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {getfeeType(EachFee.fee_type)}
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachFee.min_amount}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachFee.max_amount}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachFee.percentage_amount == 0
                    ? "-"
                    : EachFee.percentage_amount}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {EachFee.fixed_amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {fees.length == 0 && (
          <div className="flex justify-center pt-8">
            <h1 className="text-[20px] font-bold">No Fee Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};
