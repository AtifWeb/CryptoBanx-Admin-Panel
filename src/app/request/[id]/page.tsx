import { Aside } from "@/components/common/Aside";
import { HomeDetail } from "@/components/dashboard/request/HomeDetail";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={2} />
      <HomeDetail />
    </div>
  );
}
