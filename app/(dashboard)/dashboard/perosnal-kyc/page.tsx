export default function Profile() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center p-5 border border-gray-300 rounded-xl">
        <div className="p-4">
          <div>Moses</div>
          <div>moses@moses.com</div>
        </div>
        <div className="px-10 py-3 bg-blue-600 text-white border border-gray-300 rounded-full">
          Edit profile
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between p-5 border border-gray-300 rounded-xl">
          <div className="text-medium mb-2 font-bold">Personal Information</div>
          <div className="grid grid-cols-2 grid-row-2">
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">First name</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">Last name</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">Email address</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">Phone number</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
          </div>
        </div>
        <br />
        <div className="flex flex-col justify-between p-5 border border-gray-300 rounded-xl">
          <div className="text-medium mb-2 font-bold">Address</div>
          <div className="grid grid-cols-2 grid-row-2">
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">Country</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
            <div className="py-4 my-2">
              <h1 className="text-gray-700 font-light">City/State</h1>
              <h1 className="font-bold">Hey</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
