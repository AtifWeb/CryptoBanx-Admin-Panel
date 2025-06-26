import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import { Button } from "@/components/ui/button";
import { Input, ModalDialog } from "@mui/joy";
import QRCode from "react-qr-code";
import { Activate2fa } from "@/api/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export const GAuth = ({ uri, googlAuth, setgooglAuth, qr = true }: any) => {
  const [code, setcode] = useState("");
  const [active, setactive] = useState(false);
  const notify = (message: string) => toast.success(message);
  return (
    <Modal open={googlAuth} onClose={() => setgooglAuth(false)}>
      <ModalDialog className="w-[526px] !p-0 !rounded-[16px] !py-[30px]">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="px-[30px]">
          <h1
            className={`text-[24px]  font-semibold text-[#030915] ${
              qr == false && "mb-5"
            }`}
          >
            Verification By Google Auth App
          </h1>
          {qr == true && (
            <div className="py-5 flex items-center justify-center">
              {uri ? <QRCode value={uri} /> : <p>Loading QR code...</p>}
            </div>
          )}

          <div>
            <Input
              placeholder="Two-factor code:"
              className="h-[42px] text-[14px] font-normal  mb-[24px]"
              type="text"
              value={code}
              onChange={(e) => setcode(e.target.value)}
            />
          </div>

          <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
            <Button
              onClick={() => {
                setgooglAuth(false);
              }}
              variant="outline"
              className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                Activate2fa(
                  {
                    two_factor_type: "auth",
                    user_type: "user",
                    two_factor_code: code,
                  },
                  window.sessionStorage.getItem("token"),
                  setgooglAuth,
                  setactive,
                  notify
                );
              }}
              className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]
            "
            >
              {active ? (
                <div className="loader w-[28px] h-[28px] !border-[#ffffffc1] !border-t-[#3793D2]"></div>
              ) : (
                "Enable"
              )}
            </Button>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
};
