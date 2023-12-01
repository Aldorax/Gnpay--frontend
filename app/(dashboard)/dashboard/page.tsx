import Balance from "@/components/dashboard/Balance";
import Chart from "@/components/dashboard/Chart";
import Services from "@/components/dashboard/Services";
import Transaction from "@/components/dashboard/Transaction";

export default function Dashboard() {
  return (
    <div>
      <Balance />
      <Services />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <Chart />
        <Transaction />
      </div>
    </div>
  );
}
