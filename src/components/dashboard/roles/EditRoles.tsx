import React from "react";
import Modal from "@mui/joy/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox, ModalDialog } from "@mui/joy";
export const EditRoles = () => {
  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5]  rounded-[30px] p-[30px]  gap-[24px]">
        <h1 className="text-[20px] font-medium text-[#030915] mb-4">
          Permissions
        </h1>

        <div className="bg-[#fff] w-full rounded-[30px]">
          <Table className="px-0">
            <TableHeader>
              <TableRow className="h-[60px] !border-0">
                <TableHead></TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Checkbox size="sm" />
                    <p className="uppercase">View</p>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Checkbox size="sm" />
                    <p className="uppercase">Edit</p>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Checkbox size="sm" />
                    <p className="uppercase">Create</p>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Checkbox size="sm" />
                    <p className="uppercase">Delete</p>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Machines</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">License</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Settings</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Robots</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Processes</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Packages</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Assets</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Environments</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                  <div className="flex items-center gap-2">Queues</div>
                </TableCell>

                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
                <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                  <Checkbox size="sm" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
