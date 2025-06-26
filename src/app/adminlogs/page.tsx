import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/adminlogs/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={6} />

      <AccountHome />
    </div>
  );
}
