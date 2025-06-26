import React from "react";

import { EthDrawer } from "./EthDrawer";
import { ReceivedEthDrawer } from "./ReceivedEthDrawer";
import { SendEthDrawer } from "./SendEthDrawer";
import { SelectEthTokenDrawer } from "./SelectEthTokenDrawer";
import { AddCryptoAddressDrawer } from "./AddCryptoAddressDrawer";
import { VerifyTransferDrawer } from "./VerifyTransferDrawer";
import { CheckAddressMailDrawer } from "./CheckAddressMailDrawer";
import { BuyEthDrawer } from "./BuyEthDrawer";
import { VerifyBuyDrawer } from "./VerifyBuyDrawer";
import { OrderSuccessfullyDrawer } from "../btc/OrderSuccessfullyDrawer";
import { OrderEthSuccessfullyDrawer } from "./OrderEthSuccessfullyDrawer";
import { AddressBookDrawer } from "../btc/AddressBookDrawer";

export const EthDrawerWrapper = ({ ethOpen, setethOpen }: any) => {
  const [receivedOpen, setreceivedOpen] = React.useState<boolean>(false);
  const [sendOpen, setSendOpen] = React.useState<boolean>(false);
  const [Icon, setIcon] = React.useState<string>("ETH");
  const [ethaddressOpen, setEthAddressOpen] = React.useState<boolean>(false);
  const [transferOpen, setTransferOpen] = React.useState<boolean>(false);
  const [adressSentOpen, setAdressSentOpen] = React.useState<boolean>(false);
  const [tokenOpen, settokenOpen] = React.useState<boolean>(false);
  const [addressBookOpen, setaddressBookOpen] = React.useState<boolean>(false);
  const [addressDefault, setaddressDefault] = React.useState<boolean>(false);

  // buying drawer state

  // buying drawer state
  const [buyOpen, setbuyOpen] = React.useState<boolean>(false);
  const [transferBuyOpen, settransferBuyOpen] = React.useState<boolean>(false);
  const [orderSuccessOpen, setorderSuccessOpen] =
    React.useState<boolean>(false);

  return (
    <div>
      <EthDrawer
        setSendOpen={setSendOpen}
        setbuyOpen={setbuyOpen}
        open={ethOpen}
        setopen={setethOpen}
        setreceivedOpen={setreceivedOpen}
      />

      <ReceivedEthDrawer open={receivedOpen} setopen={setreceivedOpen} />

      <SendEthDrawer
        open={sendOpen}
        setopen={setSendOpen}
        setEthAddressOpen={setEthAddressOpen}
        setaddressBookOpen={setaddressBookOpen}
        setaddressDefault={setaddressDefault}
        settokenOpen={settokenOpen}
        Icon={Icon}
      />

      <AddCryptoAddressDrawer
        setTransferOpen={setTransferOpen}
        open={ethaddressOpen}
        setopen={setEthAddressOpen}
        icon={Icon}
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

      {/* buy eth drawer */}
      <BuyEthDrawer
        open={buyOpen}
        setopen={setbuyOpen}
        settransferBuyOpen={settransferBuyOpen}
        settokenOpen={settokenOpen}
        Icon={Icon}
      />

      <VerifyBuyDrawer
        open={transferBuyOpen}
        setopen={settransferBuyOpen}
        setorderSuccessOpen={setorderSuccessOpen}
        Icon={Icon}
      />

      <OrderEthSuccessfullyDrawer
        Icon={Icon}
        open={orderSuccessOpen}
        setopen={setorderSuccessOpen}
      />

      <SelectEthTokenDrawer
        seticon={setIcon}
        open={tokenOpen}
        setopen={settokenOpen}
      />
    </div>
  );
};
