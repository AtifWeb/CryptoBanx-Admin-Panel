import { Aside } from "@/components/common/Aside";
import { WalletHome } from "@/components/dashboard/wallet/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={2} />
      <WalletHome />
    </div>
  );
}
