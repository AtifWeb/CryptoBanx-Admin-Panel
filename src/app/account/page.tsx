"use client";
import { GAuth } from "@/components/auth/GAuth";
import { TwoFA } from "@/components/auth/TwoFA";
import { Verification } from "@/components/auth/Verification";
import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/account/Home";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
export default function Home() {
  const [verify, setverify] = useState<boolean>(false);
  const [twofa, settwofa] = useState<boolean>(false);
  const [googlAuth, setgooglAuth] = useState<boolean>(false);
  const [uri, seturi] = useState<string | boolean>(false);

  const notify = (message: string) => toast.success(message);
  return (
    <div className="flex flex-mobile">
      <ToastContainer position="top-right" autoClose={3000} />
      <Verification
        setverify={setverify}
        verify={verify}
        settwofa={settwofa}
        setgooglAuth={setgooglAuth}
        seturi={seturi}
      />

      <TwoFA
        settwofa={settwofa}
        twofa={twofa}
        setgooglAuth={setgooglAuth}
        notify={notify}
      />

      <GAuth googlAuth={googlAuth} setgooglAuth={setgooglAuth} uri={uri} />

      <Aside activeId={17} />

      <AccountHome index={1} setverify={setverify} />
    </div>
  );
}
