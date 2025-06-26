import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { ModalDialog, Switch } from "@mui/joy";
import { Activate2fa, send_twofa_code } from "@/api/auth";

export const Verification = ({
  verify,
  setverify,
  settwofa,
  setgooglAuth,
  seturi,
}: any) => {
  const [active, setactive] = useState(false);
  const [isEnabledGoogleAuth, setisEnabledGoogleAuth] =
    useState<boolean>(false);
  const [isEnabledEmail, setisEnabledEmail] = useState<boolean>(false);
  const [data, setdata] = useState<any>({});

  useEffect(() => {
    let data_getter = window.sessionStorage.getItem("data");

    if (data_getter) {
      data_getter = JSON.parse(data_getter);

      if (data_getter?.two_factor_type.app.activated) {
        setisEnabledGoogleAuth(true);
      }

      if (data_getter?.two_factor_type.mail.activated) {
        setisEnabledEmail(true);
      }

      setdata(data_getter);
    }
  }, []);

  return (
    <Modal open={verify} onClose={() => setverify(false)}>
      <ModalDialog className="w-[446px] !p-0 !rounded-[16px]">
        <div className="flex items-center  px-[24px] pt-4">
          <button
            onClick={() => setverify(false)}
            className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-[#F7F5EE] cursor-pointer ml-auto"
          >
            <svg
              onClick={() => setverify(false)}
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
            Verification
          </h1>
          <p className="text-[16px] mb-[35px] w-[236px] mx-auto mt-3 text-[#454850] font-normal text-center">
            Choose how you’d like to verify your profile
          </p>
          <ul className="pb-[25px]">
            <li className="px-3 py-[10px] bg-[#F5F6F7] rounded-[8px] flex items-center gap-2">
              <img
                src="/images/modal/chat.svg"
                className="self-start pt-1"
                alt=""
              />
              <div className="pr-[30px]">
                <h1 className="text-[14px] font-medium text-[#1B1E27]">
                  Email
                </h1>
                <p className="text-[12px] font-medium text-[#454850]">
                  we’ll send a verification code to your email address
                </p>
              </div>
              <Switch
                checked={isEnabledEmail}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setisEnabledEmail(event.target.checked)
                }
              />
            </li>
            <li className="px-3 py-[10px] mt-3 bg-[#F5F6F7] rounded-[8px] flex items-center gap-2">
              <img src="/images/modal/qr2.svg" className="self-start" alt="" />
              <div className="pr-[30px] flex-1">
                <h1 className="text-[14px] font-medium text-[#1B1E27]">
                  Verification By Google Auth App
                </h1>
                <p className="text-[12px] font-medium text-[#454850]">
                  Verification easily by QR
                </p>
              </div>
              <Switch
                checked={isEnabledGoogleAuth}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setisEnabledGoogleAuth(event.target.checked)
                }
              />
            </li>
          </ul>
          <div className="pb-[30px]">
            {(isEnabledEmail === true || isEnabledGoogleAuth === true) && (
              <Button
                onClick={() => {
                  if (isEnabledEmail) {
                    send_twofa_code(
                      {
                        two_factor_type: "mail",
                        user_type: "user",
                      },
                      window.sessionStorage.getItem("token"),
                      settwofa,
                      setverify,
                      setactive
                    );
                  } else {
                    send_twofa_code(
                      {
                        two_factor_type: "auth",
                        user_type: "user",
                      },
                      window.sessionStorage.getItem("token"),
                      setgooglAuth,
                      setverify,
                      setactive,
                      seturi
                    );
                  }
                }}
                className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]"
              >
                {active ? (
                  <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#3793D2]"></div>
                ) : (
                  "Next"
                )}
              </Button>
            )}
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
