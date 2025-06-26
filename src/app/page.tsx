"use client";

import { GAuth } from "@/components/auth/GAuth";
import { Login } from "@/components/auth/Login";
import { RegisterFields } from "@/components/auth/RegisterFields";
import { TwoFA } from "@/components/auth/TwoFA";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export default function Home() {
  const [steps, setsteps] = useState(1);
  const [data, setdata] = useState(1);

  const [twofa, settwofa] = useState<boolean>(false);
  const [googlAuth, setgooglAuth] = useState<boolean>(false);
  const [uri, seturi] = useState<string | boolean>(false);
  const notify = (message: string) => toast.success(message);

  return (
    <div className="flex pt-10 auth-work bg-[#F7F8FA] pb-10 min-h-[100vh] justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="w-[500px]"
      />

      <TwoFA settwofa={settwofa} twofa={twofa} notify={notify} />

      <GAuth
        googlAuth={googlAuth}
        setgooglAuth={setgooglAuth}
        uri={uri}
        qr={false}
      />

      {steps == 1 && (
        <Login
          setsteps={setsteps}
          setdata={setdata}
          setgooglAuth={setgooglAuth}
          settwofa={settwofa}
        />
      )}
      {steps == 2 && <RegisterFields data={data} setstep={setsteps} />}
    </div>
  );
}
