import { Aside } from "@/components/common/Aside";
import { AccountHome } from "@/components/dashboard/uploaddocument/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={7} />

      <AccountHome />
    </div>
  );
}
