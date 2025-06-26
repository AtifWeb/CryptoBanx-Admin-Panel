import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog, Option, Select } from "@mui/joy";
import { update_customerfee_admin } from "@/api/admin";
export const UpdateFee = ({
  addfee,
  setaddfee,
  fees,
  updatedatafee,
  setsetfees,
}: any) => {
  const [minamount, setminamount] = useState("");
  const [max_amount, setmax_amount] = useState("");
  const [percentage_amount, setpercentage_amount] = useState("");
  const [fixed_amount, setfixed_amount] = useState("");
  const [feetype, setfeetype] = useState("Percentage");
  const [active, setactive] = useState(false);

  useEffect(() => {
    console.log(updatedatafee);
    if (updatedatafee) {
      setfixed_amount(updatedatafee.fixed_amount);
      setminamount(updatedatafee.min_amount);
      setmax_amount(updatedatafee.max_amount);
      setpercentage_amount(updatedatafee.percentage_amount);
      setfeetype(
        updatedatafee.fee_type == 1
          ? "Percentage"
          : updatedatafee.fee_type == 2
          ? "Fixed"
          : "Percentage And Fixed"
      );
    }
  }, [updatedatafee]);

  const updateFee = (e: any) => {
    const data = {
      fee_type: feetype == "Percentage" ? 1 : feetype == "Fixed" ? 2 : 3,
      min_amount: Number(minamount),
      max_amount: Number(max_amount),
      percentage_amount: Number(percentage_amount),
      fixed_amount: Number(fixed_amount),
    };

    // remove old one
    let other_data = fees.filter((eachdata: any) =>
      eachdata.id != updatedatafee.id ? true : false
    );

    // removing id and user_id
    other_data = other_data.map(({ id, user_id, ...rest }: any) => rest);

    update_customerfee_admin(
      {
        customer_fee_user_id: "cbx-us-1000021",
        customer_fees: [data, ...other_data],
      },
      window.sessionStorage.getItem("admintoken"),
      setactive,
      setsetfees,
      setaddfee
    );
  };
  return (
    <Modal open={addfee} onClose={() => setaddfee(false)}>
      <ModalDialog className="w-[650px] !px-0 !py-[28px]">
        <div className="px-[24px]">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label
                htmlFor="#"
                className="text-[#525A65] text-[14px] block mb-2"
              >
                Fee type
              </label>
              <Select
                onChange={(e: any) => setfeetype(e.target.textContent)}
                className="h-[45px]"
                defaultValue={1}
              >
                <Option value={1}>Percentage</Option>
                <Option value={2}>Fixed</Option>
                <Option value={3}>Percentage And Fixed</Option>
              </Select>
            </div>
            <div>
              <label
                htmlFor="#"
                className="text-[#525A65] text-[14px] block mb-2"
              >
                Min Amount
              </label>
              <Input
                placeholder="Enter min amount"
                className="h-[42px] text-[14px] font-normal"
                value={minamount}
                onChange={(e) => setminamount(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="#"
                className="text-[#525A65] text-[14px] block mb-2"
              >
                Max Amount
              </label>
              <Input
                placeholder="Enter max amount"
                className="h-[42px] text-[14px] font-normal"
                value={max_amount}
                onChange={(e) => setmax_amount(e.target.value)}
              />
            </div>
            {(feetype == "Percentage" || feetype == "Percentage And Fixed") && (
              <div className={`${feetype == "Percentage" && "col-span-2"}`}>
                <label
                  htmlFor="#"
                  className="text-[#525A65] text-[14px] block mb-2"
                >
                  Percentage
                </label>
                <Input
                  placeholder="Enter percentage"
                  className="h-[42px] text-[14px] font-normal"
                  value={percentage_amount}
                  onChange={(e) => setpercentage_amount(e.target.value)}
                />
              </div>
            )}

            {(feetype == "Fixed" || feetype == "Percentage And Fixed") && (
              <div className={`${feetype == "Fixed" && "col-span-2"}`}>
                <label
                  htmlFor="#"
                  className="text-[#525A65] text-[14px] block mb-2"
                >
                  Fixed
                </label>
                <Input
                  placeholder="Enter fixed amount"
                  className="h-[42px] text-[14px] font-normal"
                  value={fixed_amount}
                  onChange={(e) => setfixed_amount(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className="mt-6">
            <Button
              onClick={updateFee}
              className="w-full cursor-pointer h-[45px]  text-[14px] text-[#0E121D] bg-[#01BC8D] hover:bg-[#01a57c]"
            >
              {active ? (
                <div className="loader w-[28px] h-[28px] !border-[#60d8ba] !border-t-[#2ca789]"></div>
              ) : (
                "Add now"
              )}
            </Button>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
