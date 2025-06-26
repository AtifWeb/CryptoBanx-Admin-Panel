import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/permission/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={1} />

      <AccountHome />
    </div>
  );
}
