"use client";

import {
  admin_set_permission,
  get_admin_auth_group_permission,
} from "@/api/permissions";
import { Aside } from "@/components/common/Aside";
import { ApiLoader } from "@/components/dashboard/preloader/ApiLoader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@mui/joy";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export default function Home() {
  const [permissions, setpermissions] = useState([]);
  const notify = (message: string) => toast.success(message);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  useEffect(() => {
    const userlocation = window.location.href;

    const id = userlocation.split("/")[6];

    get_admin_auth_group_permission(
      window.sessionStorage.getItem("token"),
      id,
      setpermissions,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);

  const check_which_checkbox = (permission: string, granted_name: string) => {
    let permit_name = granted_name.split(" ")[1];
    console.log(permit_name);

    if (permit_name == permission) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-mobile">
      {showpreloader && <ApiLoader />}
      <ToastContainer position="top-right" autoClose={3000} />
      <Aside activeId={17} />

      <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
        <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[20px] flex gap-[24px] account-page">
          <div className="flex-1 ">
            <h1 className="text-[18px] font-medium text-[#030915] mb-4">
              Permision View
            </h1>

            <div>
              <Table className="px-0">
                <TableHeader>
                  <TableRow className="h-[49px] !border-0">
                    <TableHead>
                      <div className="flex items-center gap-2 pl-5 ">
                        <p className="uppercase">Name</p>
                      </div>
                    </TableHead>
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
                  {permissions.map((EachPermission: any, key) => (
                    <TableRow key={key} className={`h-[53px]`}>
                      <TableCell className="text-[#030915] pl-5  text-[16px]  font-medium">
                        <div className="flex items-center gap-2">
                          {EachPermission.permission_name}
                        </div>
                      </TableCell>

                      <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                        <Checkbox
                          size="sm"
                          defaultChecked={check_which_checkbox(
                            "view",
                            EachPermission.permission_name
                          )}
                        />
                      </TableCell>
                      <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                        <Checkbox
                          size="sm"
                          defaultChecked={check_which_checkbox(
                            "change",
                            EachPermission.permission_name
                          )}
                        />
                      </TableCell>
                      <TableCell className="text-[#525A65]  text-[16px]   font-normal">
                        <Checkbox
                          size="sm"
                          defaultChecked={check_which_checkbox(
                            "add",
                            EachPermission.permission_name
                          )}
                        />
                      </TableCell>
                      <TableCell className="text-[#525A65]  pr-5  text-[16px]   font-normal">
                        <Checkbox
                          size="sm"
                          defaultChecked={check_which_checkbox(
                            "delete",
                            EachPermission.permission_name
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {permissions.length == 0 && (
                <div className="flex justify-center pt-8 pb-8">
                  {not_found ? (
                    <h1 className="text-[20px] font-bold">
                      No Permission Found
                    </h1>
                  ) : (
                    <h1 className="text-[20px] font-bold">
                      Fetching Permission.....
                    </h1>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
