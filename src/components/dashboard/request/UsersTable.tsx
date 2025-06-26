import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  admin_search_user_request,
  get_users_requests,
  response_user_from_admin,
} from "@/api/admin";
import Link from "next/link";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, Option, Select, ModalDialog } from "@mui/joy";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { ApiLoader } from "../preloader/ApiLoader";

export const UsersTable = () => {
  const [data, setdata] = useState([]);
  const [databack, setdataback] = useState([]);
  const [active, setactive] = useState<any>(null);
  const [banktype, setbanktype] = useState<any>(1);
  const [show, setshow] = useState<any>(null);
  const [Accept, setAccept] = useState<any>({ bool: false });
  const [Reject, setReject] = useState<any>({ bool: false });
  const [showpreloader, setshowpreloader] = useState(true);
  const [search_request_user_id, setsearch_request_user_id] = useState("");
  const [search_request_request_id, setsearch_request_request_id] =
    useState("");
  const [search_request_email, setsearch_request_email] = useState("");
  const [search_request_responded_email, setsearch_request_responded_email] =
    useState("");
  const [search_request_responded_id, setsearch_request_responded_id] =
    useState("");
  const [search_request_responded_type, setsearch_request_responded_type] =
    useState(0);
  const [request_from_index, setrequest_from_index] = useState(0);
  const [request_to_index, setrequest_to_index] = useState(10);

  const notify = (message: string) => toast.success(message);
  const [not_found, setnot_found] = useState(false);
  useEffect(() => {
    if (data.length > 0 && databack.length == 0) {
      setdataback(data);
    }
  }, [data]);

  useEffect(() => {
    get_users_requests(
      window.sessionStorage.getItem("token"),
      setdata,
      notify,
      setnot_found,
      setshowpreloader
    );
  }, []);

  const UserRequestTypes = (type: any) => {
    if (type == 1) {
      return "Validate Account";
    } else if (type == 2) {
      return "Create Wallet";
    } else if (type == 3) {
      return "Create Bank Account";
    } else if (type == 4) {
      return "Validate Transaction";
    } else if (type == 5) {
      return "Send Money To Client";
    } else if (type == 6) {
      return "Send Money To Beneficiary";
    } else if (type == 7) {
      return "Buy Crypto";
    } else if (type == 8) {
      return "Sell Crypto";
    }
  };

  const UserRequestStates = (type: any) => {
    if (type == 1) {
      return "Requested";
    } else if (type == 2) {
      return "Approved";
    } else if (type == 3) {
      return "Rejected";
    }
  };

  const get_currency = (type: any) => {
    if (type == 1) {
      return "EUR";
    } else if (type == 2) {
      return "GBP";
    }
  };

  const fetchName = (data: string) => {
    const data_json = JSON.parse(data);

    if (data_json.senderName) {
      return data_json.senderName;
    } else if (data_json.friendly_name) {
      return data_json.friendly_name;
    } else {
      return data_json.username;
    }
  };

  return (
    <div className="bg-[#fff] border-[1px] border-[#F2F4F6] rounded-[12px] mt-[21px] pt-[30px] px-[30px] pb-[10px] overflow-auto">
      {showpreloader && <ApiLoader />}
      <Modal
        open={Accept.bool}
        onClose={() =>
          setAccept({
            bool: false,
          })
        }
      >
        <ModalDialog className="w-[400px] !p-0 !rounded-[16px] !py-[30px]">
          <ToastContainer position="top-right" autoClose={3000} />

          <div className="px-[30px]">
            {Accept.request_type == "Create Bank Account" ? (
              <>
                <h1
                  className={`text-[24px] text-center mb-4 w-[300px] mx-auto  font-semibold text-[#030915]`}
                >
                  Proceed with creating bank account?
                </h1>
              </>
            ) : (
              <h1
                className={`text-[24px] text-center mb-4 w-[300px] mx-auto  font-semibold text-[#030915]`}
              >
                Do you want to accept the request?
              </h1>
            )}

            {Accept.request_type == "Create Bank Account" && (
              <div className="mb-4">
                <label
                  htmlFor="#"
                  className="text-[#525A65] text-[14px] block mb-2"
                >
                  Choose provider to continue
                </label>
                <Select
                  placeholder="Select Bank Type"
                  className="h-[45px]"
                  onChange={(_, newValue) => {
                    if (newValue !== null) {
                      setbanktype(newValue);
                    }
                  }}
                >
                  <Option value={1}>OpenPayd</Option>
                  <Option value={2}>BCB</Option>
                </Select>
              </div>
            )}

            <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
              <Button
                onClick={() => {
                  setAccept({
                    bool: false,
                  });
                }}
                variant="outline"
                className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
              >
                No
              </Button>
              <Button
                onClick={() => {
                  response_user_from_admin(
                    window.sessionStorage.getItem("token"),
                    {
                      requestId: Accept.id,
                      response: 2,
                      bank_api_type: banktype,
                    },
                    setactive,
                    notify
                  );

                  setAccept({
                    bool: false,
                  });
                }}
                className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]"
              >
                Yes
              </Button>
            </div>
          </div>
        </ModalDialog>
      </Modal>

      <Modal
        open={Reject.bool}
        onClose={() =>
          setReject({
            bool: false,
          })
        }
      >
        <ModalDialog className="w-[400px] !p-0 !rounded-[16px] !py-[30px]">
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="px-[30px]">
            {Reject.request_type == "Create Bank Account" ? (
              <>
                <h1
                  className={`text-[24px] text-center mb-4 w-[300px] mx-auto  font-semibold text-[#030915]`}
                >
                  Proceed with no creating bank account?
                </h1>
              </>
            ) : (
              <h1
                className={`text-[24px] text-center mb-4 w-[300px] mx-auto  font-semibold text-[#030915]`}
              >
                Do you want to accept the request?
              </h1>
            )}

            {Reject.request_type == "Create Bank Account" && (
              <div className="mb-4">
                <label
                  htmlFor="#"
                  className="text-[#525A65] text-[14px] block mb-2"
                >
                  Select Bank Type
                </label>
                <Select
                  placeholder="Select Bank Type"
                  className="h-[45px]"
                  onChange={(_, newValue) => {
                    if (newValue !== null) {
                      setbanktype(newValue);
                    }
                  }}
                >
                  <Option value={1}>OpenPayd</Option>
                  <Option value={2}>BCB</Option>
                </Select>
              </div>
            )}

            <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
              <Button
                onClick={() => {
                  setReject({
                    bool: false,
                  });
                }}
                variant="outline"
                className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
              >
                No
              </Button>
              <Button
                onClick={() => {
                  console.log(banktype);

                  response_user_from_admin(
                    window.sessionStorage.getItem("token"),
                    {
                      requestId: Reject.id,
                      response: 3,
                      bank_api_type: banktype,
                    },
                    setactive,
                    notify
                  );

                  setReject({
                    bool: false,
                  });
                }}
                className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]"
              >
                Yes
              </Button>
            </div>
          </div>
        </ModalDialog>
      </Modal>

      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-[16px] font-medium text-[#030915] mb-[20px]">
        All Users Requests
      </h1>

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
        className={`grid-cols-4 gap-3 mb-3 hidden px-[12px] ${show && "!grid"}`}
      >
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            User ID
          </label>
          <Input
            placeholder="Enter User ID"
            className="h-[42px] text-[14px] font-normal"
            value={search_request_user_id}
            onChange={(e) => setsearch_request_user_id(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Search Request ID
          </label>
          <Input
            placeholder="Enter Request ID"
            className="h-[42px] text-[14px] font-normal"
            value={search_request_request_id}
            onChange={(e) => setsearch_request_request_id(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            User Email
          </label>
          <Input
            placeholder="Enter User Email"
            className="h-[42px] text-[14px] font-normal"
            value={search_request_email}
            onChange={(e) => setsearch_request_email(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Responded Email
          </label>
          <Input
            placeholder="Enter Responded Email"
            className="h-[42px] text-[14px] font-normal"
            value={search_request_responded_email}
            onChange={(e) => setsearch_request_responded_email(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Responded User ID
          </label>
          <Input
            placeholder="Enter Responded User ID"
            className="h-[42px] text-[14px] font-normal"
            value={search_request_responded_id}
            onChange={(e) => setsearch_request_responded_id(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Request Responded Type
          </label>
          <Select
            placeholder="Select Request Responded Type"
            className="h-[45px]"
            onChange={(_, newValue: any) => {
              setsearch_request_responded_type(newValue);
            }}
            value={search_request_responded_type}
          >
            <Option value={0}>Rejected</Option>
            <Option value={1}>Approved</Option>
            <Option value={2}>All</Option>
          </Select>
        </div>

        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Request From Index
          </label>
          <Input
            placeholder="Request From Index"
            className="h-[42px] text-[14px] font-normal"
            value={request_from_index}
            onChange={(e) => setrequest_from_index(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Request To Index
          </label>
          <Input
            placeholder="Request To Index"
            className="h-[42px] text-[14px] font-normal"
            value={request_to_index}
            onChange={(e) => setrequest_to_index(Number(e.target.value))}
          />
        </div>

        <div className="flex items-end">
          <Button
            onClick={() => {
              const data = {
                search_request_responded_type: search_request_responded_type,
                request_from_index: request_from_index,
                request_to_index: request_to_index,
              } as any;

              if (search_request_user_id.length > 0) {
                data["search_request_user_id"] = search_request_user_id;
              }
              if (search_request_request_id.length > 0) {
                data["search_request_request_id"] = search_request_request_id;
              }
              if (search_request_responded_email.length > 0) {
                data["search_request_responded_email"] =
                  search_request_responded_email;
              }
              if (search_request_email.length > 0) {
                data["search_request_email"] = search_request_email;
              }
              if (search_request_responded_id.length > 0) {
                data["search_request_responded_id"] =
                  search_request_responded_id;
              }

              console.log(data);

              admin_search_user_request(
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

      <div>
        <Table className="min-w-[1000px] px-0">
          <TableHeader>
            <TableRow className="h-[49px] px-0 border-b-[#E1E6EB]">
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Sender Name
                </p>
              </TableHead>
              <TableHead className="pl-[23px]">
                <p className="text-[#030915] text-[12px]  font-normal uppercase">
                  Request Time
                </p>
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Request Type
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                State Type
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Currency
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Responded
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                User Detail
              </TableHead>
              <TableHead className="text-[#030915] text-[12px] font-normal uppercase">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((EachRow: any) => (
              <TableRow key={EachRow.id} className={`h-[53px]`}>
                <TableCell className="text-[#525A65] pl-5 text-[14px]  font-semibold">
                  {fetchName(EachRow.request_data)}
                </TableCell>
                <TableCell className="text-[#525A65] pl-5 text-[14px]  font-semibold">
                  {EachRow.request_time.split(".")[0]}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {UserRequestTypes(EachRow.request_type)}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {UserRequestStates(EachRow.state_type)}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {EachRow.currency
                    ? get_currency(EachRow.currency)
                    : "Not Given"}
                </TableCell>
                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  {EachRow.responded == true ? "Yes" : "No"}
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/request/user/${EachRow.user_id}`}
                      className="w-[80px] cursor-pointer h-[30px] rounded-full text-[13px] text-[#FFFFFF] bg-[#383a39] hover:bg-[#131313] flex items-center justify-center"
                    >
                      Details
                    </Link>
                  </div>
                </TableCell>

                <TableCell className="text-[#525A65] text-[14px]  font-semibold">
                  <div className="flex items-center gap-1">
                    <Button
                      onClick={() => {
                        console.log(EachRow.request_type_str);
                        setAccept({
                          bool: true,
                          id: EachRow.id,
                          bank_api_type: EachRow.bank_api_type,
                          request_type: EachRow.request_type_str,
                        });
                      }}
                      className="w-[80px] cursor-pointer h-[30px] rounded-full text-[13px] text-[#FFFFFF] bg-[#01BC8D] hover:bg-[#01a57c]"
                    >
                      {active == `${EachRow.id}-true` ? (
                        <div className="loader w-[15px] h-[15px] !border-[#ffffffc1] !border-t-[#227963] !border-[2px]"></div>
                      ) : (
                        "Accept"
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        setReject({
                          bool: true,
                          id: EachRow.id,
                          bank_api_type: EachRow.bank_api_type,
                          request_type: EachRow.request_type_str,
                        });
                      }}
                      className="w-[80px] cursor-pointer h-[30px] rounded-full text-[13px] text-[#FFFFFF] bg-[#fb5959] hover:bg-[#e63434]"
                    >
                      {active == `${EachRow.id}-false` ? (
                        <div className="loader w-[15px] h-[15px] !border-[#ffffffc1] !border-t-[#802323] !border-[2px]"></div>
                      ) : (
                        "Reject"
                      )}
                    </Button>
                    <Link
                      href={`/request/${EachRow.user_id}`}
                      className="flex items-center"
                    >
                      <img
                        src="/images/admin/arrow.svg"
                        className="w-[20px]"
                        alt=""
                      />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {data.length == 0 && (
          <div className="flex justify-center pt-8 pb-8">
            {not_found ? (
              <h1 className="text-[20px] font-bold">No User Request Found</h1>
            ) : (
              <h1 className="text-[20px] font-bold">
                Fetching Users Requests....
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
