import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { admin_search_user, get_all_users } from "@/api/admin";
import Link from "next/link";
import { Input, Option, Select } from "@mui/joy";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast, ToastContainer } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";
export const UsersTable = () => {
  const [data, setdata] = useState([]);
  const [show, setshow] = useState(false);
  const [active, setactive] = useState(false);
  const [search_user_id, setsearch_user_id] = useState("");
  const [search_user_affiliate, setsearch_user_affiliate] = useState("");
  const [search_user_reference, setsearch_user_reference] = useState("");
  const [search_user_email, setsearch_user_email] = useState("");
  const [search_validated, setsearch_validated] = useState(true);
  const [search_user_is_active, setsearch_user_is_active] = useState(true);
  const [search_user_locked, setsearch_user_locked] = useState(false);
  const [search_email_validated, setsearch_email_validated] = useState(false);
  const [search_user_email_limit, setsearch_user_email_limit] = useState(100);
  const [showpreloader, setshowpreloader] = useState(true);
  const notify = (message: string) => toast.success(message);
  useEffect(() => {
    get_all_users(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
      setshowpreloader
    );
  }, []);
  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] px-[30px] pb-[10px] overflow-auto">
      {showpreloader && <ApiLoader />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />
      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]">
        All Users
      </h1>

      <div>
        <div
          onClick={() => setshow(!show)}
          className="h-[50px] w-full cursor-pointer rounded-[8px] bg-gradient-to-r
         from-[#00BC8D] to-[#04bb8d] flex items-center justify-between px-5 text-[#fff] mb-3"
        >
          <h1 className="text-[20px] font-semibold">Filters</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className={`size-6 ${show && "rotate-[180deg]"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`grid-cols-4 gap-3 mb-3 hidden px-[12px] ${
            show && "!grid"
          }`}
        >
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User ID
            </label>
            <Input
              placeholder="User ID"
              className="h-[42px] text-[14px] font-normal"
              value={search_user_id}
              onChange={(e) => setsearch_user_id(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Affiliate
            </label>
            <Input
              placeholder="User Affiliate"
              className="h-[42px] text-[14px] font-normal"
              value={search_user_affiliate}
              onChange={(e) => setsearch_user_affiliate(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Reference
            </label>
            <Input
              placeholder="User Reference"
              className="h-[42px] text-[14px] font-normal"
              value={search_user_reference}
              onChange={(e) => setsearch_user_reference(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Email
            </label>
            <Input
              placeholder="User Email"
              className="h-[42px] text-[14px] font-normal"
              value={search_user_email}
              onChange={(e) => setsearch_user_email(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Validated
            </label>
            <Select
              placeholder="Select User Validated"
              className="h-[45px]"
              onChange={(_, newValue: any) => {
                setsearch_validated(newValue);
              }}
              value={search_validated}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Active
            </label>
            <Select
              placeholder="Select Active User"
              className="h-[45px]"
              onChange={(_, newValue: any) => {
                setsearch_user_is_active(newValue);
              }}
              value={search_user_is_active}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Locked
            </label>
            <Select
              placeholder="Select Locked User"
              className="h-[45px]"
              onChange={(_, newValue: any) => {
                setsearch_user_locked(newValue);
              }}
              value={search_user_locked}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Email Validated
            </label>
            <Select
              placeholder="Select Locked Email"
              className="h-[45px]"
              onChange={(_, newValue: any) => {
                setsearch_email_validated(newValue);
              }}
              value={search_email_validated}
            >
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              User Limit
            </label>
            <Input
              placeholder="Email Limit"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e: any) => {
                setsearch_user_email_limit(e.target.value);
              }}
              value={search_user_email_limit}
            />
          </div>

          <div className="flex items-end">
            <Button
              onClick={() => {
                const data = {
                  search_user_id: search_user_id,
                  search_user_affiliate: search_user_affiliate,
                  search_user_reference: search_user_reference,

                  search_user_email: search_user_email,
                  search_validated: search_validated,
                  search_user_is_active: search_user_is_active,
                  search_user_locked: search_user_locked,
                  search_user_email_validated: search_email_validated,
                  search_user_limit: search_user_email_limit,
                };

                admin_search_user(
                  window.sessionStorage.getItem("token"),
                  data,
                  setdata,
                  setactive,
                  notify
                );
              }}
              className="w-[120px] cursor-pointer h-[40px] rounded-[8px] text-[15px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              {active ? (
                <div className="loader w-[22px] h-[22px] !border-[#60d8ba] !border-t-[#2ca789]"></div>
              ) : (
                "Search"
              )}
            </Button>
          </div>
        </div>
        <Table className="min-w-[1000px] px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 !border-0">
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Email
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                Username
              </TableHead>
              <TableHead className="text-[#030915] text-[14px] font-normal uppercase">
                User Phone
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Company
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Date Joined
              </TableHead>
              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                Last Login
              </TableHead>

              <TableHead className="text-[#030915] text-[14px]  font-normal uppercase">
                More
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((eachdata: any) => (
              <TableRow key={eachdata.id} className={`h-[53px]`}>
                <TableCell className="text-[#030915]  text-[16px]  font-medium">
                  {eachdata.email}
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {eachdata.username ? eachdata.username : "Not Given"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {eachdata.phone ? eachdata.phone : "Not Given"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {eachdata.uci_company_name
                    ? eachdata.uci_company_name
                    : "Not Given"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {eachdata.date_joined.split(" ")[0]}
                </TableCell>

                <TableCell className="text-[#525A65] text-[16px]  font-normal">
                  {eachdata.last_login
                    ? eachdata.last_login.split(" ")[0]
                    : "Not Given"}
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                          />
                        </svg>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-[20px] user-dropdown pt-[20px] pb-[16px] px-[10px]">
                      <DropdownMenuLabel className="flex  border-b-[1px] border-b-[#E1E6EA] mb-[10px] items-center gap-[10px] ">
                        <Link
                          href={`/customerfee/${eachdata.id}`}
                          className="flex items-center justify-between w-full   "
                        >
                          <p>Customer Fees</p>
                          <img
                            src="/images/admin/arrow.svg"
                            className="w-[20px]"
                            alt=""
                          />
                        </Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel className="flex  border-b-[1px] border-b-[#E1E6EA] mb-[10px] items-center gap-[10px] ">
                        <Link
                          href={`/permissions/group/view/${eachdata.auth_group_id}`}
                          className="flex items-center justify-between w-full   "
                        >
                          <p>Permissions</p>
                          <img
                            src="/images/admin/arrow.svg"
                            className="w-[20px]"
                            alt=""
                          />
                        </Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel className="flex  border-b-[1px] border-b-[#E1E6EA] mb-[10px] items-center gap-[10px] ">
                        <Link
                          href={`/permissions/group/${eachdata.id}@${
                            eachdata.is_admin == false ? "user" : "admin"
                          }@${eachdata.auth_group_id}`}
                          className="flex items-center justify-between w-full   "
                        >
                          <p>Update Permission Group</p>
                          <img
                            src="/images/admin/arrow.svg"
                            className="w-[20px]"
                            alt=""
                          />
                        </Link>
                      </DropdownMenuLabel>
                      <DropdownMenuLabel className="flex  border-b-[1px] border-b-[#E1E6EA]  items-center gap-[10px] ">
                        <Link
                          href={`/request/user/${eachdata.id}`}
                          className="flex items-center justify-between w-full"
                        >
                          <p>Details</p>
                          <img
                            src="/images/admin/arrow.svg"
                            className="w-[20px]"
                            alt=""
                          />
                        </Link>
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
