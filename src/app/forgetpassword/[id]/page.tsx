"use client";
import { Input } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { forget_password } from "@/api/auth";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export default function Home() {
  const [password, setpassword] = useState("");
  const [active, setactive] = useState<boolean>(false);
  const [forget_password_guid, setforget_password_guid] = useState("");
  const [apierror, setapierror] = useState<boolean>(false);
  const notify = (message: string) => toast.success(message);

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const code = pathSegments[pathSegments.length - 1];
    setforget_password_guid(code);
  }, []);
  return (
    <div className="flex pt-10 auth-work bg-[#F7F8FA] pb-10 min-h-[100vh] justify-center items-center">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-[650px] register px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
        <img src="/images/aside/logo.svg" className="mb-[30px]" alt="" />

        <div className="grid grid-cols-2 gap-[20px]">
          {apierror && (
            <div className="col-span-2 h-[50px] bg-[#FFE4E5] rounded-[6px] flex items-center justify-between  px-5">
              <p className="text-[#F7171A] text-[14px] font-normal">
                Incorrect username and password
              </p>
              <img
                src="/images/error/close-red.svg"
                className="cursor-pointer"
                alt=""
                onClick={() => setapierror(false)}
              />
            </div>
          )}
          <div className="col-span-2">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              New Password
            </label>
            <Input
              placeholder="Set New Password"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
            <Button
              onClick={() =>
                forget_password(
                  {
                    forget_password_password: password,
                    forget_password_guid: forget_password_guid,
                  },
                  window.sessionStorage.getItem("token"),
                  setactive,
                  notify
                )
              }
              className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]
            "
            >
              {active ? (
                <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#3793D2]"></div>
              ) : (
                "Forget Password"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
