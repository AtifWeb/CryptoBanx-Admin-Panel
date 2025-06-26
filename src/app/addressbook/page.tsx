import { Aside } from "@/components/common/Aside";
import { Addressbook } from "@/components/dashboard/addressbook/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={4} />

      <Addressbook />
    </div>
  );
}
