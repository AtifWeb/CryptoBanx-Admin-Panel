import { Aside } from "@/components/common/Aside";
import { DashboardHome } from "@/components/dashboard/validatedusers/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={4} />
      <DashboardHome />
    </div>
  );
}
