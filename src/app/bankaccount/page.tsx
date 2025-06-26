import { Aside } from "@/components/common/Aside";
import { BankAccountHome } from "@/components/dashboard/bankaccount/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={3} />
      <BankAccountHome />
    </div>
  );
}
