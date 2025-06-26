import React from "react";

import { ReceivedDrawer } from "@/components/btc/ReceivedDrawer";
import { BtcDrawer } from "@/components/btc/BtcDrawer";
import { SendBtcDrawer } from "@/components/btc/SendBtcDrawer";
import { AddBtcAddressDrawer } from "@/components/btc/AddBtcAddressDrawer";
import { VerifyTransferDrawer } from "@/components/btc/VerifyTransferDrawer";
import { CheckAddressMailDrawer } from "@/components/btc/CheckAddressMailDrawer";
import { BuyBtcDrawer } from "@/components/btc/BuyBtcDrawer";
import { VerifyBuyDrawer } from "@/components/btc/VerifyBuyDrawer";
import { OrderSuccessfullyDrawer } from "@/components/btc/OrderSuccessfullyDrawer";
import { AddressBookDrawer } from "@/components/btc/AddressBookDrawer";

export const BtcDrawerWrapper = ({ btcOpen, setBtcOpen }: any) => {
  const [receivedOpen, setreceivedOpen] = React.useState<boolean>(false);
  const [sendOpen, setSendOpen] = React.useState<boolean>(false);
  const [btcaddressOpen, setBtcAddressOpen] = React.useState<boolean>(false);
  const [transferOpen, setTransferOpen] = React.useState<boolean>(false);
  const [adressSentOpen, setAdressSentOpen] = React.useState<boolean>(false);
  const [addressBookOpen, setaddressBookOpen] = React.useState<boolean>(false);
  const [addressDefault, setaddressDefault] = React.useState<boolean>(false);

  // buying drawer state
  const [buyOpen, setbuyOpen] = React.useState<boolean>(false);
  const [transferBuyOpen, settransferBuyOpen] = React.useState<boolean>(false);
  const [orderSuccessOpen, setorderSuccessOpen] =
    React.useState<boolean>(false);
  return (
    <div>
      <BtcDrawer
        setSendOpen={setSendOpen}
        setbuyOpen={setbuyOpen}
        open={btcOpen}
        setopen={setBtcOpen}
        setreceivedOpen={setreceivedOpen}
      />

      {/* Received Drawer */}
      <ReceivedDrawer open={receivedOpen} setopen={setreceivedOpen} />

      {/* Sending Drawer */}
      <SendBtcDrawer
        open={sendOpen}
        setopen={setSendOpen}
        setBtcAddressOpen={setBtcAddressOpen}
        setaddressBookOpen={setaddressBookOpen}
        setaddressDefault={setaddressDefault}
      />

      <AddBtcAddressDrawer
        setTransferOpen={setTransferOpen}
        open={btcaddressOpen}
        setopen={setBtcAddressOpen}
      />

      <AddressBookDrawer
        setTransferOpen={setTransferOpen}
        open={addressBookOpen}
        setopen={setaddressBookOpen}
        setaddressDefault={setaddressDefault}
      />

      <VerifyTransferDrawer
        setAdressSentOpen={setAdressSentOpen}
        open={transferOpen}
        setopen={setTransferOpen}
        addressDefault={addressDefault}
        setorderSuccessOpen={setorderSuccessOpen}
      />

      <CheckAddressMailDrawer
        open={adressSentOpen}
        setopen={setAdressSentOpen}
      />

      {/* Buyer Drawer */}
      <BuyBtcDrawer
        open={buyOpen}
        setopen={setbuyOpen}
        settransferBuyOpen={settransferBuyOpen}
      />

      <VerifyBuyDrawer
        open={transferBuyOpen}
        setopen={settransferBuyOpen}
        setorderSuccessOpen={setorderSuccessOpen}
      />

      <OrderSuccessfullyDrawer
        open={orderSuccessOpen}
        setopen={setorderSuccessOpen}
      />
    </div>
  );
};
