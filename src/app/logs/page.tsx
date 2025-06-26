import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/logs/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={5} />

      <AccountHome />
    </div>
  );
}
