import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { get_notifications, read_notifications } from "@/api/user";
import { toast, ToastContainer } from "react-toastify";
export const Notification = () => {
  const [data, setdata] = useState([]);
  const [count, setcount] = useState<Number | null>(null);
  const [list_to_read, setlist_to_read] = useState<any>([]);
  const notify = (message: string) => toast.success(message);

  useEffect(() => {
    console.log(data.length);
    if (data.length > 0) {
      let count_notify = 0;
      let read_list: any[] = [];
      data.forEach((eachdata: any) => {
        if (eachdata.is_read == false) {
          console.log(eachdata);
          count_notify++;
          read_list.push(eachdata.id);
        }
      });

      if (read_list.length > 0) {
        setlist_to_read(read_list);
      }

      if (count_notify != 0) {
        setcount(count_notify);
      }
    }
  }, [data]);

  useEffect(() => {
    get_notifications(window.sessionStorage.getItem("token"), setdata, notify);
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          onPointerDown={() => {
            if (list_to_read.length > 0) {
              read_notifications(
                window.sessionStorage.getItem("token"),
                list_to_read,
                notify
              );
            }
          }}
          className="w-[34px] cursor-pointer h-[34px] flex items-center justify-center bell-icon-wrapper rounded-full bg-[#fff] relative"
        >
          {count && (
            <div className="absolute top-0 right-0 bg-[#00BC8D] border-[1px] border-[#EDEFF3] w-[12px] h-[12px] rounded-full"></div>
          )}
          <img src="/images/controls/bell.svg" className="bell-icon" alt="" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[20px] pt-2 w-[350px] h-[400px] user-dropdown flex flex-col gap-1">
        {data.map((Eachdata: any) => (
          <DropdownMenuLabel
            key={Eachdata?.id}
            className="p-0 py-[10px] border-b-[1px] border-b-[#00000042]"
          >
            <div
              className={` px-[10px]  rounded-[8px] items-center gap-2 hover:bg-[#0000000b]  ${
                Eachdata?.is_read == false &&
                "border-l-[#00BC8D] border-l-[3px]"
              }`}
            >
              <h1 className="text-[15px] font-bold">
                {Eachdata?.message.split("-")[0]}
              </h1>
              <p className="text-[13px]">{Eachdata?.message.split("-")[1]}</p>
            </div>
          </DropdownMenuLabel>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
