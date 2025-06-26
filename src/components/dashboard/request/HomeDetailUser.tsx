"use client";
import { ModeSwitch } from "@/components/common/ModeSwitch";
import { UserDropdown } from "@/components/common/UserDropdown";
import { Notification } from "@/components/common/Notification";
import React, { useEffect, useState } from "react";
import {
  get_admin_user_fiats,
  get_customerfee_admin,
  get_spec_user_request,
  get_user_details,
} from "@/api/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SwitchUser } from "../validatedusers/SwitchUser";
import { SwitchUserAffiliate } from "../validatedusers/SwitchUserAffiliate";
import { SwitchUserLock } from "../validatedusers/SwitchUserLock";
import { SwitchUserBan } from "../validatedusers/SwitchUserBan";
import { Input, Option, Select } from "@mui/joy";
import { TransactionTableDetail } from "../transaction/TransactionTableDetail";
import { CustomerFeeTable } from "../permission/CustomerFeeTable";
import { UsersTableSpecs } from "./UsersTableSpecs";
import { LogTableOneUser } from "../logs/LogTableOneUser";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
import { UserFiatsTable } from "../logs/UserFiatsTable";
import { AccountInfoTable } from "../logs/AccountInfoTable";
export const HomeDetailUser = () => {
  const [data, setdata] = useState<any>({});
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [Gender, setGender] = useState(0);
  const [Citizenship, setCitizenship] = useState("");
  const [phonecodecountry, setphonecodecountry] = useState("");
  const [phone, setphone] = useState("");
  const [phonecode, setphonecode] = useState("");
  const [email, setemail] = useState("");
  const [table_active, settable_active] = useState(0);
  const [request, setrequest] = useState([]);
  // company data
  const [legal_entity, setlegal_entity] = useState("");
  const [trading_name, settrading_name] = useState("");
  const [legal_entity_type, setlegal_entity_type] = useState("");
  const [date_of_incorporation, setdate_of_incorporation] = useState("");
  const [website, setwebsite] = useState("");
  const [regno, setregno] = useState("");
  const [taxnumber, settaxnumber] = useState("");
  const [country_short, setcountry_short] = useState("");
  const [country_code, setcountry_code] = useState("");
  const [cphone, setcphone] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [state, setstate] = useState("");
  const [postolcode, setpostolcode] = useState("");
  const [sector, setsector] = useState("");
  const [sector_value, setsector_value] = useState("");
  const [corporate_email, setcorporate_email] = useState("");
  const notify = (message: string) => toast.success(message);
  const [accounts, setaccounts] = useState([]);
  const [fees, setfees] = useState([]);
  const [not_found, setnot_found] = useState(false);
  const [showpreloader, setshowpreloader] = useState(true);
  useEffect(() => {
    let tokenadmin = window.sessionStorage.getItem("token");

    const link = window.location.href;

    const id = link.split("/")[5];

    get_spec_user_request(
      window.sessionStorage.getItem("token"),
      id,
      setrequest,
      notify
    );
    get_customerfee_admin(
      {
        customer_fee_user_id: id,
      },
      tokenadmin,
      setfees,
      notify,
      setnot_found
    );
  }, []);

  useEffect(() => {
    const link = window.location.href;

    const id = link.split("/")[5];
    console.log(id);

    get_admin_user_fiats(
      window.sessionStorage.getItem("token"),
      id,
      setaccounts,
      notify
    );
    get_user_details(
      window.sessionStorage.getItem("token"),
      id,
      setdata,
      notify,
      setshowpreloader
    );
  }, []);

  useEffect(() => {
    if (data.Username) {
      setfirstname(data["First Name"]);
      setlastname(data["Last Name"]);
      setusername(data.Username);
      setGender(data.Gender);
      setCitizenship(data.Citizenship);
      setbirthdate(data["Birth Date"]?.split(" ")[0] || "");
      setemail(data.Email);
      setphonecode("");
      setphone(data.Phone);
      setphonecodecountry(data["Country Phone Code"]);
      setphonecode(data["Country Phone Code"]);

      if (data["Client Type Str"] == "BUSINESS") {
        setlegal_entity(data["Uci Legal Entity"]);
        setdate_of_incorporation(
          data["Uci Date Of Incorporation"]?.split(" ")[0] || ""
        );
        settrading_name(data["Uha Address"]);
        setlegal_entity_type(data["Uci Company Type"]);
        setwebsite(data["Uci Website"]);
        setregno(data["Uci Reqistration Number"]);
        settaxnumber(data["Uci Tax Identification Number"]);
        setcountry_short(data["Uha Country Short Name2"]);
        setcountry_code(data["Uha Country Phone Code"]);
        setcphone(data["Uci Phone"]);
        setcountry(data["Uci Country"]);
        setcity(data["Uci City"]);
        setaddress(data["Uci Address"]);
        setstate(data["Uci State"]);
        setpostolcode(data["Uha Postal Code"]);
        setsector(data["Uci Business Sector"]);
        setsector_value(data["Uci Business Sector Value"]);
        setcorporate_email(data["Corporate Directors"]);
      }
    }
  }, [data]);

  return (
    <div className="flex-1 pt-[15px] pr-[15px] pb-[15px] h-[100vh]">
      {showpreloader && <ApiLoader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <div className="bg-[#F7F8FA] overflow-auto no-scroll border-[1px] h-full p-[30px] border-[#E2E4E5] flex-1 rounded-[30px]">
        <div className="flex items-center justify-between mb-[21px]">
          <div>
            <h1 className="font-medium text-[20px] text-[#020911]">
              User Profile Administration
            </h1>
            <p>Manage user details, accounts, and activity</p>
          </div>
          <div className="flex items-center gap-2">
            <Notification />

            <ModeSwitch />

            {/* user dropdown */}
            <UserDropdown />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-[20px]">
          <div className="bg-[#fff] p-4 rounded-[10px]">
            <ul className="flex flex-col gap-[14px]">
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">User ID:</h1>
                <p className="text-[14px] font-normal mt-1">{data?.Id}</p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Username:</h1>
                <p className="text-[14px] font-normal mt-1">{data?.Username}</p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Email:</h1>
                <p className="text-[14px] font-normal mt-1">{data?.Email}</p>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff] p-4 rounded-[10px]">
            <ul className="flex flex-col gap-[14px]">
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Phone:</h1>
                <p className="text-[14px] font-normal mt-1">{data?.Phone}</p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Status:</h1>

                {data["Is Active"] == true ? (
                  <p className="text-[14px] font-normal mt-1">
                    <span className="bg-[#0C802F] text-[#fff]  px-2 py-[2px] rounded-[5px]">
                      Active
                    </span>
                  </p>
                ) : (
                  <p className="text-[14px] font-normal mt-1">
                    <span className="bg-[#2E2C36] text-[#fff]  px-2 py-[2px] rounded-[5px]">
                      Inactive
                    </span>
                  </p>
                )}
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Client Type:</h1>
                <p className="text-[14px] font-normal mt-1">
                  {data["Client Type"]}
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff] p-4 rounded-[10px]">
            <ul className="flex flex-col gap-[14px]">
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Affiliate ID:</h1>
                <p className="text-[14px] font-normal mt-1">
                  {data["Affiliate Id"]}{" "}
                  {data["Affiliate Active"] == true ? (
                    <span className="bg-[#0C802F] text-[#fff]  px-2 py-[2px] rounded-[5px]">
                      Active
                    </span>
                  ) : (
                    <span className="bg-[#2E2C36] text-[#fff]  px-2 py-[2px] rounded-[5px]">
                      Inactive
                    </span>
                  )}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Joined:</h1>
                <p className="text-[14px] font-normal mt-1">
                  {data["Date Joined"]}
                </p>
              </li>
              <li className="flex items-center justify-between">
                <h1 className="text-[14px] font-normal">Last Login:</h1>
                <p className="text-[14px] font-normal mt-1">
                  {data["Last Login"]}
                </p>
              </li>
            </ul>
          </div>
        </div>
        {Object.keys(data).length > 0 && (
          <Table className="min-w-[1000px] px-0 bg-[#fff]">
            <TableHeader>
              <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
                <TableHead className="pl-[23px]">
                  <p className="text-[#030915] text-[12px]  font-normal uppercase">
                    KYC Verified
                  </p>
                </TableHead>
                <TableHead>
                  <p className="text-[#030915] text-[12px]  font-normal uppercase">
                    AFFILIATED
                  </p>
                </TableHead>
                <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                  LOCK
                </TableHead>
                <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                  SUSPEND
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className={`h-[53px]`}>
                <TableCell className="text-[#525A65] pl-[25px] text-[16px]  font-normal">
                  <SwitchUser validated={data} />
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  <SwitchUserAffiliate validated={data} />
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  <SwitchUserLock validated={data} />
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  <SwitchUserBan validated={data} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}

        <div className="bg-[#fff] p-[16px] rounded-[14px] mt-5">
          <h1 className="text-[16px]">Customer Fee</h1>
          <CustomerFeeTable fees={fees} setsetfees={setfees} />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-[20px]">
          <div className="bg-[#fff] p-[16px] rounded-[14px]">
            <h1 className="text-[16px] mb-[16px]">User Information</h1>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label htmlFor="#" className="text-[12px]">
                  First Name
                </label>
                <Input
                  placeholder="Enter First Name"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={firstname}
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Last Name
                </label>
                <Input
                  placeholder="Enter Last Name"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={lastname}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Username
                </label>
                <Input
                  placeholder="Enter Username"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Birth Date
                </label>
                <Input
                  placeholder="Enter Birth Date"
                  type="date"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={birthdate}
                  onChange={(e) => {
                    setbirthdate(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Gender
                </label>
                <Select
                  placeholder="Select Client Type"
                  className="h-[45px] mt-2"
                  value={Gender}
                  onChange={(_, newValue) => {
                    if (newValue !== null) {
                      setGender(newValue);
                    }
                  }}
                >
                  <Option value={1}>Male</Option>
                  <Option value={2}>Female</Option>
                </Select>
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Citizenship
                </label>
                <Input
                  placeholder="Enter Citizenship"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={Citizenship}
                  onChange={(e) => {
                    setCitizenship(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#fff] p-[16px] rounded-[14px]">
            <h1 className="text-[16px] mb-[16px]">Contact Details</h1>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Phone Code Country
                </label>
                <Input
                  placeholder="Enter Phone Code Country"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={phonecodecountry}
                  onChange={(e) => {
                    setphonecodecountry(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Phone Code
                </label>
                <Input
                  placeholder="Enter Phone Code"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={phonecode}
                  onChange={(e) => {
                    setphonecode(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Phone
                </label>
                <Input
                  placeholder="Enter Phone"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Email
                </label>
                <Input
                  placeholder="Enter Email"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {data["Client Type Str"] != "INDIVIDUAL" && (
          <div className="bg-[#fff] p-[16px] rounded-[14px] mt-[20px]">
            <h1 className="text-[16px] mb-[16px]">Company Information</h1>
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
              <div className="col-span-3">
                <label htmlFor="#" className="text-[12px]">
                  Legal Entity
                </label>
                <Input
                  placeholder="Enter Legal Entity"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={legal_entity}
                  onChange={(e) => {
                    setlegal_entity(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Trading Name
                </label>
                <Input
                  placeholder="Enter Trading Name"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={trading_name}
                  onChange={(e) => {
                    settrading_name(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Legal Entity Type
                </label>
                <Input
                  placeholder="Enter Legal Entity Type"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={legal_entity_type}
                  onChange={(e) => {
                    setlegal_entity_type(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Date of Incorporation
                </label>
                <Input
                  placeholder="Enter Date of Incorporation"
                  type="date"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={date_of_incorporation}
                  onChange={(e) => {
                    setdate_of_incorporation(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="#" className="text-[12px]">
                  Website
                </label>
                <Input
                  placeholder="Enter Website"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={website}
                  onChange={(e) => {
                    setwebsite(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Registration Number
                </label>
                <Input
                  placeholder="Enter Registration Number"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={regno}
                  onChange={(e) => {
                    setregno(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Tax Identification Number
                </label>
                <Input
                  placeholder="Enter Tax Identification Number"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={taxnumber}
                  onChange={(e) => {
                    settaxnumber(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="#" className="text-[12px]">
                  Country Short
                </label>
                <Input
                  placeholder="Enter Country Short"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={country_short}
                  onChange={(e) => {
                    setcountry_short(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Country Code
                </label>
                <Input
                  placeholder="Enter Country Code"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={country_code}
                  onChange={(e) => {
                    setcountry_code(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Phone
                </label>
                <Input
                  placeholder="Enter Phone"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={cphone}
                  onChange={(e) => {
                    setcphone(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="#" className="text-[12px]">
                  Country
                </label>
                <Input
                  placeholder="Enter Country"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={country}
                  onChange={(e) => {
                    setcountry(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  City
                </label>
                <Input
                  placeholder="Enter City"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Address
                </label>
                <Input
                  placeholder="Enter Address"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  State
                </label>
                <Input
                  placeholder="Enter State"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={state}
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Postal Code
                </label>
                <Input
                  placeholder="Enter Postal Code"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={postolcode}
                  onChange={(e) => {
                    setpostolcode(e.target.value);
                  }}
                />
              </div>
              <div></div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Sector
                </label>
                <Input
                  placeholder="Enter Sector"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={sector}
                  onChange={(e) => {
                    setsector(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="#" className="text-[12px]">
                  Sector Value
                </label>
                <Input
                  placeholder="Enter Sector Value"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={sector_value}
                  onChange={(e) => {
                    setsector_value(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="#" className="text-[12px]">
                  Corporate Directors Group
                </label>

                <Input
                  placeholder="Enter Corporate Email"
                  className="h-[45px] text-[14px] font-normal mt-2"
                  value={corporate_email}
                  onChange={(e) => {
                    setcorporate_email(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {accounts.length > 0 && (
          <div className="bg-[#fff] p-[16px] rounded-[14px] mt-[20px]">
            <h1 className="text-[16px] mb-[16px]">Account Information</h1>

            <ul>
              {accounts.map((each_account: any) => (
                <li className="h-[59px] border-b-[1px] border-b-[#0000004a] flex items-center">
                  <p className="flex-1">{each_account.friendly_name}</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[14px] font-medium">
                      {each_account.bank_country}
                    </p>
                    <img src="/arrow.svg" alt="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="inline-flex items-center gap-2 mt-[20px] border-[1px] border-[#00000067] rounded-full p-[6px] tabs-dashboard">
          <li
            className={`cursor-pointer px-5 py-3 rounded-full ${
              table_active == 0 && "bg-[#fff]"
            }`}
            onClick={() => settable_active(0)}
          >
            Transactions
          </li>
          <li
            className={`cursor-pointer px-5 py-3 rounded-full ${
              table_active == 1 && "bg-[#fff]"
            }`}
            onClick={() => settable_active(1)}
          >
            Requests
          </li>
          <li
            className={`cursor-pointer px-5 py-3 rounded-full ${
              table_active == 2 && "bg-[#fff]"
            }`}
            onClick={() => settable_active(2)}
          >
            Login Logs{" "}
          </li>
          <li
            className={`cursor-pointer px-5 py-3 rounded-full ${
              table_active == 3 && "bg-[#fff]"
            }`}
            onClick={() => settable_active(3)}
          >
            User Fiats
          </li>
          <li
            className={`cursor-pointer px-5 py-3 rounded-full ${
              table_active == 4 && "bg-[#fff]"
            }`}
            onClick={() => settable_active(4)}
          >
            Account Info
          </li>
        </ul>

        <div className={`mt-[10px] ${table_active != 0 && "hidden"}`}>
          <TransactionTableDetail notify={notify} />
        </div>
        <div className={`mt-[10px] ${table_active != 1 && "hidden"}`}>
          <UsersTableSpecs data={request} />
        </div>
        <div className={`mt-[10px] ${table_active != 2 && "hidden"}`}>
          <LogTableOneUser notify={notify} />
        </div>
        <div className={`mt-[10px] ${table_active != 3 && "hidden"}`}>
          <UserFiatsTable notify={notify} />
        </div>
        <div className={`mt-[10px] ${table_active != 4 && "hidden"}`}>
          <AccountInfoTable notify={notify} />
        </div>
      </div>
    </div>
  );
};
