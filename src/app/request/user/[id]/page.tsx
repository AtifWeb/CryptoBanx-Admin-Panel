import { Aside } from "@/components/common/Aside";
import { HomeDetailUser } from "@/components/dashboard/request/HomeDetailUser";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={1} />
      <HomeDetailUser />
    </div>
  );
}
