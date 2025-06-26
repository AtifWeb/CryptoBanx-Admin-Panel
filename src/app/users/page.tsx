import { Aside } from "@/components/common/Aside";
import { DashboardHome } from "@/components/dashboard/home/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={1} />
      <DashboardHome />
    </div>
  );
}
