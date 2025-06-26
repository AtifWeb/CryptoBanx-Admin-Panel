import { Checkbox, Input, Option, Select } from "@mui/joy";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { UploadFile } from "./UploadFile";

export const UploadDocsCompany = ({ setstep }: any) => {
  return (
    <div className="w-[650px] register  px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <img src="/images/aside/logo.svg" className="mb-[30px]" alt="" />

      <h1 className="text-[20px] font-medium mb-[20px]">For Company </h1>
      <div className="grid grid-cols-1 gap-[24px]">
        <div>
          <h1 className="text-[16px] font-medium mb-4">
            Documents and Certificates
          </h1>
          <p className="text-[14px] font-normal mb-2">
            Upload your profile picture
          </p>
          <UploadFile
            id="profile-pic-doc"
            title="Upload your profile picture"
          />
        </div>
        <div>
          <h1 className="text-[16px] font-medium mb-4">
            Please provide your document
          </h1>
          <p className="text-[14px] font-normal mb-2">Government Issued ID</p>

          <div className="flex flex-col gap-2">
            <UploadFile
              id="goverment-id-front"
              title="Upload your Government Issued ID front"
            />
            <UploadFile
              id="goverment-id-back"
              title="Upload your Government Issued ID back"
            />
          </div>
          <p className="text-[14px] font-normal mb-2 mt-[10px]">Passport</p>
          <UploadFile id="passport" title="Upload your Passport" />

          <p className="text-[14px] font-normal mb-2 mt-[10px]">Utility bil</p>
          <UploadFile id="passport" title="Upload your Utility bil" />
        </div>

        <div>
          <h1 className="text-[16px] font-medium mb-4">
            Documents and Certificates
          </h1>
          <p className="text-[14px] font-normal mb-2">
            Certificate incorperation
          </p>

          <UploadFile
            id="Certificateincorperation"
            title=" Upload your Certificate incorperation"
          />

          <div className="flex items-center gap-2 col-span-2 mt-[10px]">
            <Checkbox />
            <p className="text-[14px] font-normal">Is financial institution?</p>
          </div>

          <p className="text-[14px] font-normal mb-2 mt-[24px]">
            Shareholder certificate
          </p>

          <UploadFile
            id="Shareholdecertificate"
            title="Upload your Shareholder certificate"
          />

          <p className="text-[14px] font-normal mb-2 mt-[24px]">
            Director certificate
          </p>

          <UploadFile
            id="Directorcertificate"
            title="Upload your Director certificate"
          />

          <p className="text-[14px] font-normal mb-2 mt-[24px]">
            Corparate article association
          </p>

          <UploadFile
            id="Corparatearticleassociation"
            title="Upload your Corparate article association"
          />
        </div>

        <div className="flex items-center  buttons-wrapper-register mt-2 gap-2">
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
