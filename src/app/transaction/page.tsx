import { Aside } from "@/components/common/Aside";
import { DashboardHome } from "@/components/dashboard/transaction/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={3} />
      <DashboardHome />
    </div>
  );
}
