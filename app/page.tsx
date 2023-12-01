import Menu from "@/components/register/menu";
import Step1 from "@/components/register/step1";

export default function Home() {
  return (
    <div className="w-screen max-w-screen flex justify-between flex-grow items-center">
      <div className="flex w-[40vw] m-4">
        <Menu />
      </div>

      <div className="flex flex-grow m-4 w-[50vw ] rounded-xl">
        <Step1 />
      </div>
    </div>
  );
}
