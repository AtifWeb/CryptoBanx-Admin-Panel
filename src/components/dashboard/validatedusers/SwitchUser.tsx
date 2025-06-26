import { validate_user } from "@/api/admin";
import { Switch } from "@mui/joy";
import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { ModalDialog } from "@mui/joy";
export const SwitchUser = ({ validated }: any) => {
  const [ischecked, setischecked] = useState(false);
  const [active, setactive] = useState(false);
  const [open, setopen] = useState(false);

  useEffect(() => {
    setischecked(validated.validated);

    if (validated.Validated != undefined) {
      setischecked(validated.Validated);
    }
  }, []);

  return (
    <div>
      <Modal open={open} onClose={() => setopen(false)}>
        <ModalDialog className="w-[446px] !p-0 !rounded-[16px]">
          <div className="flex items-center  px-[24px] pt-4">
            <button
              onClick={() => setopen(false)}
              className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#F7F5EE] cursor-pointer ml-auto"
            >
              <svg
                onClick={() => setopen(false)}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.375 4.43213L4.625 13.1821"
                  stroke="#676A72"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.625 4.43213L13.375 13.1821"
                  stroke="#676A72"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="px-[50px]">
            <h1 className="text-[22px] text-center font-semibold text-[#1B1E27]">
              Confirmation
            </h1>
            <p className="text-[16px] mb-4 mx-auto mt-3 text-[#454850] font-normal text-center">
              Do you want to make this account as{" "}
              <span className="text-[#050A18] font-semibold">Validated</span>
            </p>

            <div className="pb-[40px]">
              <Button
                onClick={() => {
                  if (validated.Id != undefined) {
                    validate_user(
                      {
                        validate_user_id: validated.Id,
                        validate_tenant_id: validated["Tenant Id"],
                        validate_bank_api_type: 1,
                      },
                      window.sessionStorage.getItem("token"),
                      setischecked,
                      setactive
                    );
                  } else {
                    validate_user(
                      {
                        validate_user_id: validated.id,
                        validate_tenant_id: validated.tenant_id,
                        validate_bank_api_type: 1,
                      },
                      window.sessionStorage.getItem("token"),
                      setischecked,
                      setactive
                    );
                  }

                  setopen(false);
                }}
                className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]"
              >
                Confirm
              </Button>
              <Button
                variant="outline"
                className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] mt-3 "
                onClick={() => {
                  setopen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </ModalDialog>
      </Modal>

      {active == true ? (
        <div className="loader !border-t-[2px] !border-[2px] w-[20px] h-[20px] !border-[#ffffffc1] !border-t-[#3793D2] !ml-0"></div>
      ) : (
        <Switch
          checked={ischecked}
          onChange={(event) => {
            const isChecked = event.target.checked;

            if (isChecked == true) {
              setopen(true);
            }
          }}
        />
      )}
    </div>
  );
};
