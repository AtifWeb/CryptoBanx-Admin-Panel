import { Aside } from "@/components/common/Aside";
import { AffiliateEarning } from "@/components/dashboard/affiliate/AffiliateEarning";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={7} />
      <AffiliateEarning />
    </div>
  );
}
