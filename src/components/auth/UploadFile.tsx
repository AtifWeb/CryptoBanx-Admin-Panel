import React, { useState } from "react";

type upload = {
  title: string;
  id: string;
};

export const UploadFile = ({ title, id }: upload) => {
  const [percentage, setpercentage] = useState<number>(50);
  const [file, setfile] = useState<File | null>(null);

  const percentageVal = () => {
    setTimeout(() => {
      setpercentage(100);
    }, 1000);
  };

  const handlefile = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      setfile(file);
      percentageVal();
    }
  };

  return (
    <div>
      {file ? (
        <div className="border-[1px] border-[##DFE2E6]  rounded-[6px] p-[24px]">
          <div className="flex items-center gap-2 mb-[24px]">
            <img src="/images/auth/upload-done.svg" alt="" />
            <div className="flex-1">
              <h1 className="text-[#030915] font-medium text-[14px]">
                {file?.name}
              </h1>
              <p className="text-[12px] font-normal text-[#030915]">
                {file?.size}
              </p>
            </div>
            {percentage == 100 && <img src="/images/auth/tick.svg" alt="" />}
          </div>
          <div className="flex items-center   gap-2">
            <div className="w-full flex-1 bg-[#BBCFE8] h-[5px] rounded-full">
              <span
                style={{ width: `${percentage}%` }}
                className="h-[5px] duration-300 bg-[#358FCF] block rounded-full"
              ></span>
            </div>
            <p className="text-[14px] font-normal text-[#030915]">
              {percentage}%
            </p>
          </div>
        </div>
      ) : (
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center gap-3 h-[140px] border-[1px] border-[#E1E6EB] rounded-[10px] cursor-pointer"
        >
          <div className="w-[60px] h-[60px] rounded-[10px] bg-[#E6E6E8] flex items-center justify-center upload-icon-wrapper">
            <img src="/images/auth/upload.svg" alt="" />
          </div>
          <p className="text-[14px] text-[#525A65]">{title}</p>
        </label>
      )}

      <input type="file" id={id} onChange={handlefile} className="hidden" />
    </div>
  );
};
