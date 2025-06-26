import React, { useEffect, useState } from "react";

export const ModeSwitch = () => {
  const [active, setactive] = useState<boolean>(false);

  useEffect(() => {
    if (document.querySelector("body")?.classList.contains("night")) {
      setactive(true);
      document.querySelector("body")?.classList.add("night");
    } else if (window.localStorage.getItem("night")) {
      setactive(true);
      document.querySelector("body")?.classList.add("night");
    }
  }, []);

  return (
    <div
      className={`flex p-1  items-center w-[62.8px] h-[33.05px] bg-[#fff] rounded-full ${
        active == true && "dark-mode-switch"
      }`}
    >
      <button
        onClick={() => {
          setactive(false);
          window.localStorage.removeItem("night");
          document.querySelector("body")?.classList.remove("night");
        }}
        className={`w-[29.5px] cursor-pointer h-[29.5px] flex items-center justify-center rounded-full ${
          active == false && "bg-[#ECEEF1]"
        }`}
      >
        <img src="/images/controls/light.svg" alt="" />
      </button>
      <button
        onClick={() => {
          setactive(true);
          document.querySelector("body")?.classList.add("night");
          window.localStorage.setItem("night", "true");
        }}
        className={`w-[29.5px] cursor-pointer h-[29.5px] flex items-center justify-center rounded-full ${
          active == true && "bg-[#121117]"
        }`}
      >
        <img src="/images/controls/dark.svg" alt="" />
      </button>
    </div>
  );
};
