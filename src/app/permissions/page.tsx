import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/logs/Home";
import { EditRoles } from "@/components/dashboard/roles/EditRoles";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={6} />

      <EditRoles />
    </div>
  );
}
