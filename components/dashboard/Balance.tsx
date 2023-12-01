export default function Balance() {
  return (
    <div className="flex flex-row space-x-4 md:space-y-0 md:space-x-12 p-4 w-full overflow-x-auto md:overflow-x-hidden">
      <div className="flex-shrink-0 w-[80vw] md:w-[40vw] border rounded-xl border-black p-4 min-h-20 md:h-48 flex items-center justify-center gap-5 text-center md:text-start">
        <div className="hidden md:flex flex-col items-center">Hello</div>
        <div className="flex flex-col justify-center md:justify-between w-full">
          <div>
            <h1 className="text-medium">Wallet Balance</h1>
            <h1 className="text-xl md:text-4xl font-semibold">₦ 0.00</h1>
          </div>
          <div className="flex w-full justify-center md:justify-end text-end">
            <h1 className="text-medium md:text-lg px-6 p-2 md:p-4 bg-blue-500 rounded-xl text-white font-semibold w-[95%] md:w-fit text-center md:text-start">
              + Add money
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-[80vw] md:w-[40vw] border rounded-xl border-black p-4 min-h-20 md:h-48 flex items-center justify-center gap-5 text-center md:text-start">
        <div className="hidden md:flex flex-col items-center">Hello</div>
        <div className="flex flex-col justify-center md:justify-between w-full">
          <div>
            <h1 className="text-medium">Eligible amount for financing</h1>
            <h1 className="text-xl md:text-4xl font-semibold">₦ 0.00</h1>
          </div>
          <div className="flex w-full justify-center md:justify-end text-end">
            <h1 className="text-medium md:text-lg px-6 p-2 md:p-4 text-blue-500 border border-blue-500 rounded-xl font-semibold w-[95%] md:w-fit text-center md:text-start">
              Get Auto gas financing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
