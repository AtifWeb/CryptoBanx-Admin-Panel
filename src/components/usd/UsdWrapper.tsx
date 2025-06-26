import React from "react";

import { SendUSDType } from "./SendUSDType";
import { SendFiatDrawer } from "./SendFiatDrawer";
import { SendUSDDrawer } from "./SendUSDDrawer";
import { VerifyTransferUSDDrawer } from "./VerifyTransferUSDDrawer";
import { OrderUSDSuccessfullyDrawer } from "./OrderUSDSuccessfullyDrawer";
import { AddressUSDBookDrawer } from "./AddressUSDBookDrawer";

export const UsdWrapper = ({ usdOpen, setusdOpen }: any) => {
  const [SendFiat, setSendFiat] = React.useState<boolean>(false);
  const [SendUSD, setSendUSD] = React.useState<boolean>(false);
  const [verifyTransferUSD, setverifyTransferUSD] =
    React.useState<boolean>(false);
  const [orderUsdSuccess, setorderUsdSuccess] = React.useState<boolean>(false);
  const [addressBookOpen, setaddressBookOpen] = React.useState<boolean>(false);

  return (
    <div>
      <SendUSDType
        open={usdOpen}
        setopen={setusdOpen}
        setSendFiat={setSendFiat}
        setaddressBookOpen={setaddressBookOpen}
      />
      <SendFiatDrawer
        open={SendFiat}
        setopen={setSendFiat}
        setSendUSD={setSendUSD}
      />

      <AddressUSDBookDrawer
        open={addressBookOpen}
        setopen={setaddressBookOpen}
        setSendUSD={setSendUSD}
      />

      <SendUSDDrawer
        open={SendUSD}
        setopen={setSendUSD}
        setverifyTransferUSD={setverifyTransferUSD}
      />

      <VerifyTransferUSDDrawer
        open={verifyTransferUSD}
        setopen={setverifyTransferUSD}
        setorderUsdSuccess={setorderUsdSuccess}
      />

      <OrderUSDSuccessfullyDrawer
        open={orderUsdSuccess}
        setopen={setorderUsdSuccess}
      />
    </div>
  );
};
