"use client";
import { Input } from "@mui/joy";
import React, { useState } from "react";
import { loginUser } from "@/api/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export const Login = ({ setsteps, setdata, setgooglAuth, settwofa }: any) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [active, setactive] = useState(false);
  const [passworderror, setpassworderror] = useState<boolean>(false);
  const [passwordsuccess, setpasswordsuccess] = useState<boolean>(false);
  const [apierror, setapierror] = useState<boolean>(false);
  const [tenant_id, settenant_id] = useState("");
  const router = useRouter();
  const notify = (message: string) => toast.success(message);
  const actionFunction = () => {
    if (password.length < 8) {
      setpassworderror(true);
      return;
    } else {
      setpasswordsuccess(true);
    }

    if (email.length == 0) {
      return;
    }
    setactive(true);
    loginUser(
      email,
      password,
      setactive,
      setsteps,
      setdata,
      setapierror,
      setgooglAuth,
      settwofa,
      tenant_id,
      router,
      notify
    );
  };

  return (
    <div className="w-[650px] register px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
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
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Email
          </label>
          <Input
            placeholder="Enter your email"
            className="h-[42px] text-[14px] font-normal"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Tenant ID
          </label>
          <Input
            placeholder="Enter Tenant ID"
            className="h-[42px] text-[14px] font-normal"
            onChange={(e) => settenant_id(e.target.value)}
            value={tenant_id}
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Password
          </label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => {
                setpassword(e.target.value);
                setpassworderror(false);
              }}
              value={password}
              type="password"
            />
            {passworderror && (
              <p className="text-[#F7171ACC]  font-normal text-[14px] mt-2">
                The password confirmation doesn't match
              </p>
            )}
            {passwordsuccess && (
              <img
                src="/images/error/tick.svg"
                className="absolute right-3 top-3"
                alt=""
              />
            )}
          </div>

          <div className="mt-2">
            <Link
              href="/forgetpassword"
              className="text-[13px] text-[#194EAD] underline"
            >
              Forget Password?
            </Link>
          </div>
        </div>

        <div className="flex buttons-wrapper-register items-center gap-2 col-span-2">
          <Button
            onClick={() => {
              actionFunction();
            }}
            className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]
            "
          >
            {active ? (
              <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#3793D2]"></div>
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
