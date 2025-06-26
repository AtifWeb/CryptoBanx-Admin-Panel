import { Aside } from "@/components/common/Aside";
import { CheckoutHome } from "@/components/dashboard/checkout/Home";

export default function Home() {
  return (
    <div className="flex flex-mobile">
      <Aside activeId={6} />

      <CheckoutHome />
    </div>
  );
}
