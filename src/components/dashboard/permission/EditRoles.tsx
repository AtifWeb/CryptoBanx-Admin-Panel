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
export const EditRoles = ({ addfee, setaddfee }: any) => {
  return (
    <Modal open={addfee} onClose={() => setaddfee(false)}>
      <ModalDialog className="w-[787px] !px-0 !py-[18px]">
        <div>
          <Table className="px-0">
            <TableHeader>
              <TableRow className="h-[49px] !border-0">
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
      </ModalDialog>
    </Modal>
  );
};
