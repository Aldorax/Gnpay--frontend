export default function Transaction() {
  return (
    <div className="p-4 h-64 mb-4">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="text-lg font-bold">Transactions</h1>
          {/* Dropdown Select for timeline such as today, yersterday, past 3 days, last 7 days etc */}
          <select className="border border-black p-2 rounded-xl hidden md:flex">
            <option>Today</option>
            <option>Yesterday</option>
            <option>Past 3 days</option>
            <option>Past 7 days</option>
            <option>Past 30 days</option>
          </select>
        </div>
        <div>See All</div>
      </div>
      <div className="flex items-center justify-center h-full w-full mt-2 border-black pb-5 bg-gray-300">
        <h1>No recent transactions</h1>
      </div>
    </div>
  );
}
