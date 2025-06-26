import { Aside } from "@/components/common/Aside";
import { DashboardHome } from "@/components/dashboard/affiliate/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={7} />
      <DashboardHome />
    </div>
  );
}
