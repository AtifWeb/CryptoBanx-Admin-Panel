import { Aside } from "@/components/common/Aside";
import { DashboardHome } from "@/components/dashboard/request/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={2} />
      <DashboardHome />
    </div>
  );
}
