import { Input, Option, Select } from "@mui/joy";
import { countries } from "../../utils/components/countries";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { insertUserData } from "@/api/auth";
export const RegisterFields = ({ setstep, data }: any) => {
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonecode, setphonecode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [country, setcountry] = useState("");
  const [gender, setgender] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [state, setstate] = useState("");

  const [regno, setregno] = useState("");
  const [taxno, settaxno] = useState("");
  const [copphone, setcopphone] = useState("");

  const activeFunction = () => {
    const individualData = {
      phone: phonenumber,
      phone_code: phonecode,
      username: username,
      first_name: firstname,
      last_name: lastname,
      birth_date: dateofbirth,
      citizenship: country,
      gender: Number(gender),
      client_type: data.ctype == "BUSINESS" ? 2 : 1,
      home_address_country: country,
      home_address_postal_code: postalcode,
      home_address_city: city,
      home_address_address: address,
      home_address_state: state,
      tenant_id: "cbx-tt-1000001",
      admin_user_id: "cbx-us-1000001",
    };
    console.log(window.sessionStorage.getItem("token"));

    insertUserData(individualData, window.sessionStorage.getItem("token"));
    console.log(individualData);
  };

  return (
    <div className="w-[650px] register  px-[29px] py-[27px] bg-[#FFFFFF] rounded-[24px] border-[1px] border-[#E2E4E5]">
      <img src="/images/aside/logo.svg" className="mb-[30px]" alt="" />

      {data?.ctype == "INDIVIDUAL" ? (
        <div className="grid grid-cols-2 gap-[20px]  mt-3">
          <div className="col-span-2">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Username
            </label>
            <Input
              placeholder="Enter your username"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setusername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              First name
            </label>
            <Input
              placeholder="Enter your first name"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstname}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Last name
            </label>
            <Input
              placeholder="Enter your last name"
              className="h-[42px] text-[14px] font-normal"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Phone code
            </label>
            <Input
              placeholder="Enter your code"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setphonecode(e.target.value)}
              value={phonecode}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Phone number
            </label>
            <Input
              placeholder="Enter your phone number"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setphonenumber(e.target.value)}
              value={phonenumber}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Date of birth
            </label>
            <Input
              type="date"
              placeholder="Enter Date of birth"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setdateofbirth(e.target.value)}
              value={dateofbirth}
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Country
            </label>
            <Select
              placeholder="Select your country"
              className="h-[45px]"
              onChange={(_, newValue) => {
                if (newValue !== null) {
                  setcountry(newValue);
                }
              }}
            >
              {countries.map((Eachcountries) => (
                <Option
                  key={Eachcountries.id}
                  value={Eachcountries.country_short_name3}
                >
                  {Eachcountries.country_long_name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              City
            </label>

            <Input
              placeholder="Enter your Address"
              className="h-[42px] text-[14px] font-normal"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Address
            </label>
            <Input
              placeholder="Enter your Address"
              className="h-[42px] text-[14px] font-normal"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Postal code
            </label>
            <Input
              placeholder="Enter your post code"
              className="h-[42px] text-[14px] font-normal"
              value={postalcode}
              onChange={(e) => setpostalcode(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              State
            </label>
            <Input
              placeholder="Enter your state name"
              className="h-[42px] text-[14px] font-normal"
              value={state}
              onChange={(e) => setstate(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Gender
            </label>
            <Select
              onChange={(_, newValue) => {
                if (newValue !== null) {
                  setgender(newValue);
                }
              }}
              placeholder="Select your gender"
              className="h-[45px]"
            >
              <Option value="1">Male</Option>
              <Option value="2">Female</Option>
            </Select>
          </div>

          <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
            <Button
              variant="outline"
              className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                activeFunction();
              }}
              className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]
            "
            >
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-[20px] mt-3">
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Registration number
            </label>
            <Input
              placeholder="Enter registration number"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setregno(e.target.value)}
              value={regno}
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Tax number
            </label>
            <Input
              placeholder="Enter tax number"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => settaxno(e.target.value)}
              value={taxno}
              type="password"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate phone code
            </label>
            <Input
              placeholder="Enter your code"
              className="h-[42px] text-[14px] font-normal"
              type="password"
              onChange={(e) => setphonecode(e.target.value)}
              value={phonecode}
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate phone number
            </label>
            <Input
              placeholder="Enter phone number"
              className="h-[42px] text-[14px] font-normal"
              onChange={(e) => setcopphone(e.target.value)}
              value={copphone}
              type="password"
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate country
            </label>
            <Select
              placeholder="Select your country"
              className="h-[45px]"
              onChange={(_, newValue) => {
                if (newValue !== null) {
                  setcountry(newValue);
                }
              }}
            >
              {countries.map((Eachcountries) => (
                <Option
                  key={Eachcountries.id}
                  value={Eachcountries.country_short_name3}
                >
                  {Eachcountries.country_long_name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate state
            </label>
            <Input
              placeholder="Enter your state name"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate name
            </label>
            <Input
              placeholder="Enter your name"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate city
            </label>
            <Select placeholder="Select city" className="h-[45px]"></Select>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate address
            </label>
            <Input
              placeholder="Enter your address"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Corporate postal code
            </label>
            <Input
              placeholder="Enter postal code"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Business sector
            </label>
            <Select placeholder="Select sector" className="h-[45px]"></Select>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Currency
            </label>
            <Select
              placeholder="Select your currency"
              className="h-[45px]"
            ></Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Country
            </label>
            <Select
              placeholder="Select your country"
              className="h-[45px]"
              onChange={(_, newValue) => {
                if (newValue !== null) {
                  setcountry(newValue);
                }
              }}
            >
              {countries.map((Eachcountries) => (
                <Option
                  key={Eachcountries.id}
                  value={Eachcountries.country_short_name3}
                >
                  {Eachcountries.country_long_name}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Initial source of funds
            </label>
            <Select placeholder="Select source" className="h-[45px]"></Select>
          </div>

          <div>
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Estimated number of payments
            </label>
            <Input
              placeholder="Enter amount"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="#"
              className="text-[#525A65] text-[14px] block mb-2"
            >
              Website link
            </label>
            <Input
              placeholder="Enter your website link"
              className="h-[42px] text-[14px] font-normal"
              type="password"
            />
          </div>

          <div className="flex buttons-wrapper-register items-center gap-2 mt-2 col-span-2">
            <Button
              variant="outline"
              className="w-full flex-1 cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#525A65] "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setstep(3);
              }}
              className="w-full cursor-pointer h-[42px] rounded-[8px] text-[16px] text-[#FFFFFF] bg-gradient-to-r flex-1 from-[#194EAD] to-[#3793D2]
            "
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
