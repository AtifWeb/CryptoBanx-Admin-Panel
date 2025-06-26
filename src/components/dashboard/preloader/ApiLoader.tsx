import React from "react";

export const ApiLoader = () => {
  return (
    <div className="w-full bg-[#fff] fixed left-0 top-0 z-50 h-[100vh] flex flex-col items-center justify-center">
      <img
        src="/images/aside/logo.svg"
        className="w-[200px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
      <div className="pt-[120px]">
        <div className="loader w-[35px] h-[35px] !border-[#ffffffc1]  !border-t-[#031222]"></div>
      </div>
    </div>
  );
};
