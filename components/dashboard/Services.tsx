export default function Services() {
  return (
    <div className="w-full px-4">
      <h1 className="text-medium font-semibold p-1 flex items-center justify-between">
        <span>Quick Start</span>
        <span className="font-semibold text-blue-500">See All</span>
      </h1>
      <div className="flex items-center justify-between md:justify-normal gap-4 overflow-x-scroll md:overflow-x-hidden">
        <div className="border border-black p-4 h-36 rounded-xl flex flex-col justify-between min-w-full md:min-w-[20vw] md:max-w-[20vw]">
          <div>Image</div>
          <div className="flex justify-between items-center">
            <p>Auto gas financing</p>
            <p>Arrow</p>
          </div>
        </div>
        <div className="border border-black p-4 h-36 rounded-xl flex flex-col justify-between min-w-full md:min-w-[20vw] md:max-w-[20vw]">
          <div>Image</div>
          <div className="flex justify-between items-center">
            <p>Inventory financing</p>
            <p>Arrow</p>
          </div>
        </div>
        <div className="border border-black p-4 h-36 rounded-xl flex flex-col justify-between min-w-full md:min-w-[20vw] md:max-w-[20vw]">
          <div>Image</div>
          <div className="flex justify-between items-center">
            <p>Airtime Purchase</p>
            <p>Arrow</p>
          </div>
        </div>
        <div className="border border-black p-4 h-36 rounded-xl flex flex-col justify-between min-w-full md:min-w-[20vw] md:max-w-[20vw]">
          <div>Image</div>
          <div className="flex justify-between items-center">
            <p>Uber VIP</p>
            <p>Arrow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
