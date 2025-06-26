import { Checkbox, Input, Option, Select } from "@mui/joy";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { registerUser } from "@/api/auth";

export const Register = ({ setstep, settwofa }: any) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [active, setactive] = useState(false);
  const [clienttype, setclienttype] = useState<string>("1");
  const [error, seterror] = useState<string>("");
  const [cpassword, setcpassword] = useState<string>("");
  const [succcesp1, setsucccesp1] = useState<boolean>(false);
  const [succcesp2, setsucccesp2] = useState<boolean>(false);
  const [apierror, setapierror] = useState<boolean>(false);

  const actionFunction = () => {
    if (password.length < 8) {
      seterror("password-length");
      return;
    }

    setactive(true);
    registerUser(email, password, clienttype, setactive, setapierror, settwofa);
  };

  return (
    <div className="w-[650px] register  px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <img src="/images/aside/logo.svg" className="mb-[30px]" alt="" />

      <div className="grid grid-cols-2 gap-[20px]">
        {apierror && (
          <div className="col-span-2 h-[50px] bg-[#FFE4E5] rounded-[6px] flex items-center justify-between  px-5">
            <p className="text-[#F7171A] text-[14px] font-normal">
              Something went wrong, try again later
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
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Password
          </label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => {
                setpassword(e.target.value);
                seterror("");

                if (e.target.value.length > 7) {
                  setsucccesp1(true);
                } else {
                  setsucccesp1(false);
                }
              }}
              value={password}
              type="password"
            />
            {succcesp1 == true && (
              <img
                src="/images/error/tick.svg"
                className="absolute right-3 top-3"
                alt=""
              />
            )}
          </div>
          {error == "password-length" && (
            <p className="text-[12px] font-normal text-[#F7171A] mt-2">
              Your passwerd must be at least 8 characters
            </p>
          )}
        </div>
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              className="h-[42px] text-[14px] font-normal"
              type="password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
                seterror("");

                if (e.target.value == password) {
                  setsucccesp2(true);
                } else {
                  setsucccesp2(false);
                }
              }}
            />
            {succcesp2 == true && (
              <img
                src="/images/error/tick.svg"
                className="absolute right-3 top-3"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="col-span-2">
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Client Type
          </label>
          <Select
            onChange={(_, newValue) => {
              if (newValue !== null) {
                setclienttype(newValue);
              }
            }}
            placeholder="Select Client Type"
            className="h-[45px]"
            defaultValue="1"
          >
            <Option value="1">Individual</Option>
            <Option value="2">Company</Option>
          </Select>
        </div>

        <div className="flex items-center gap-2 col-span-2">
          <Checkbox />
          <p className="text-[14px] font-normal">
            By registering, you accept our{" "}
            <Link href="/" className="text-[#2A64CA]">
              Terms of use and Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-2 col-span-2">
          <Checkbox />
          <p className="text-[14px] font-normal">
            I agree to receive marketing communications from Cryptobanx
          </p>
        </div>

        <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
          <Button
            variant="outline"
            className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
          >
            Cancel
          </Button>
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
              "Register"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
