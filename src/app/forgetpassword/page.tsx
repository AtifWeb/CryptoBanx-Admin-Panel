"use client";
import { Input } from "@mui/joy";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { get_forget_password } from "@/api/auth";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export default function Home() {
  const [email, setemail] = useState("");
  const [active, setactive] = useState<boolean>(false);
  const [apierror, setapierror] = useState<boolean>(false);
  const notify = (message: string) => toast.success(message);

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
              Email
            </label>
            <Input
              placeholder="Enter your email"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>

          <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
            <Button
              onClick={() =>
                get_forget_password(
                  {
                    forget_password_email: email,
                    forget_password_user_type: "user",
                    forget_password_tenant_id: "cbx-tt-1000001",
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
