import { Option, Select } from "@mui/joy";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { UploadFile } from "./UploadFile";

export const UploadDocs = ({ setstep }: any) => {
  const [documentType, setdocumentType] = useState<string>("Government_issues");

  return (
    <div className="w-[650px] register  px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <img src="/images/aside/logo.svg" className="mb-[30px]" alt="" />

      <h1 className="text-[20px] font-medium mb-[20px]">For User </h1>
      <div className="grid grid-cols-1 gap-[20px]">
        <div>
          <p className="text-[14px] font-normal mb-2">
            Upload your profile picture
          </p>

          <UploadFile id="sprofilepic" title="Choose your profile picture" />
        </div>
        <div>
          <label htmlFor="#" className="text-[#525A65] text-[14px] block mb-2">
            Please provide your document
          </label>
          <Select
            onChange={(
              event: React.SyntheticEvent | null,
              newValue: string | null
            ) => {
              if (newValue) setdocumentType(newValue ? newValue : "");
            }}
            defaultValue="BTC"
            placeholder="Upload your Government Issued ID"
            className="h-[45px]"
          >
            <Option value="Government_issues">Government Issued ID</Option>
            <Option value="Passport">Passport</Option>
            <Option value="Utility_bil">Utility bil</Option>
          </Select>
        </div>

        {documentType == "Government_issues" && (
          <div className="flex flex-col gap-2">
            <UploadFile
              id="govfront"
              title="Upload your Government Issued ID front"
            />
            <UploadFile
              id="govback"
              title="Upload your Government Issued ID back"
            />
          </div>
        )}
        {documentType == "Passport" && (
          <UploadFile id="passport" title="Upload your Passport" />
        )}
        {documentType == "Utility_bil" && (
          <UploadFile id="utility" title="Upload your Utility bil" />
        )}

        <div className="flex items-center buttons-wrapper-register mt-2 gap-2">
          <Button
            onClick={() => setstep(2)}
            variant="outline"
            className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
          >
            Back
          </Button>
          <Button
            onClick={() => setstep(2)}
            className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r from-[#194EAD] to-[#3793D2]"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
