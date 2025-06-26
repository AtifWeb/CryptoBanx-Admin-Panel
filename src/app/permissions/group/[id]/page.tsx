"use client";

import {
  admin_get_permission_groups,
  admin_set_permission,
} from "@/api/permissions";
import { Aside } from "@/components/common/Aside";
import { ApiLoader } from "@/components/dashboard/preloader/ApiLoader";
import { Button } from "@/components/ui/button";
import { Option, Select } from "@mui/joy";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export default function Home() {
  const [groups, setgropus] = useState([]);
  const [authgroup, setauthgroup] = useState(0);
  const [active, setactive] = useState(false);
  const [type, settype] = useState("0");
  const [id, setid] = useState("0");
  const notify = (message: string) => toast.success(message);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  useEffect(() => {
    const userlocation = window.location.href;

    const usercode = userlocation.split("/")[5];

    const id = usercode.split("@")[0];
    const type = usercode.split("@")[1];
    const authgroup = usercode.split("@")[2];

    setauthgroup(Number(authgroup));
    setid(id);
    settype(type);

    admin_get_permission_groups(
      window.sessionStorage.getItem("token"),
      setgropus,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);
  return (
    <div className="flex flex-mobile">
      {showpreloader && <ApiLoader />}
      <ToastContainer position="top-right" autoClose={3000} />
      <Aside activeId={17} />

      <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
        <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full  border-[#E2E4E5] flex-1 rounded-[30px] p-[20px] flex gap-[24px] account-page">
          <div className="flex-1 ">
            <h1 className="text-[18px] font-medium text-[#030915] mb-4">
              Update User Permission
            </h1>

            {groups.length == 0 && (
              <div className="flex justify-center pt-8 pb-8">
                <h1 className="text-[20px] font-bold">
                  Fetching Update Form....
                </h1>
              </div>
            )}

            {groups.length > 0 && (
              <>
                <div className="mt-2">
                  <label
                    htmlFor="#"
                    className="text-[#525A65] text-[14px] block mb-2"
                  >
                    Permission Group
                  </label>
                  <Select
                    placeholder="Select Client Type"
                    className="h-[45px]"
                    value={authgroup}
                    onChange={(_, newValue) => {
                      if (newValue !== null) {
                        console.log(newValue);

                        setauthgroup(newValue);
                      }
                    }}
                  >
                    {groups.map((Eachgroup: any) => (
                      <Option key={Eachgroup.id} value={Eachgroup.id}>
                        {Eachgroup.name}
                      </Option>
                    ))}
                  </Select>
                </div>
                <Button
                  onClick={() => {
                    admin_set_permission(
                      window.sessionStorage.getItem("token"),
                      {
                        auth_group_id: authgroup,
                        auth_group_user_id: id,
                        auth_group_user_type: type,
                      },
                      setactive,
                      notify
                    );
                  }}
                  className="w-full mt-3 cursor-pointer h-[40px] rounded-[8px] text-[15px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c]"
                >
                  {active ? (
                    <div className="loader w-[22px] h-[22px] !border-[#60d8ba] !border-t-[#2ca789]"></div>
                  ) : (
                    "Set User Permission"
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
