import React from "react";

import { ReceivedUSD } from "./ReceivedUSD";
import { UploadReceiptDrawer } from "./UploadReceiptDrawer";
import { OrderUSDSuccessfullyDrawer } from "./OrderUSDSuccessfullyDrawer";

export const UsdWrapperReceive = ({
  usdReceiveOpen,
  setusdReceiveOpen,
}: any) => {
  const [UploadReceipt, setUploadReceipt] = React.useState<boolean>(false);
  const [orderSuccessfully, setorderSuccessfully] =
    React.useState<boolean>(false);

  return (
    <div>
      <ReceivedUSD
        open={usdReceiveOpen}
        setopen={setusdReceiveOpen}
        setUploadReceipt={setUploadReceipt}
      />
      <UploadReceiptDrawer
        open={UploadReceipt}
        setopen={setUploadReceipt}
        setorderSuccessfully={setorderSuccessfully}
      />

      <OrderUSDSuccessfullyDrawer
        open={orderSuccessfully}
        setopen={setorderSuccessfully}
      />
    </div>
  );
};
