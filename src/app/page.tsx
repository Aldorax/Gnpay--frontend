import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="min-w-[60vw] min-h-screen flex justify-center items-center border border-white text-white bg-[#16242F]">
        <div>
          <h1 className="px-3 text-2xl font-semibold mb-6">
            {/* Unlock Your Dreams, Pay Later with GNPAY Africa! */}
            Unlock Your Dreams, Astora - Symply finance!
          </h1>
          <Link
            href={"/"}
            className="py-4 px-10 bg-[#0575E6] rounded-full my-4 text-white"
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="min-w-[40vw] min-h-screen flex flex-col justify-center items-center mx-auto border border-white text-black bg-white">
        <div>
          <h1 className="px-3 text-4xl font-bold mb-2">Hello again!</h1>
          <p className="px-3 text-lg font-normal mb-4">Welcome Back</p>

          <form className="flex flex-col justify-center items-start">
            <label htmlFor="email" className="hidden">
              `
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="py-6 px-10 border border-gray-400 rounded-full my-2 min-w-[400px]"
            />
            <label htmlFor="password" className="hidden">
              `
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="py-6 px-10 border border-gray-400 rounded-full my-2 min-w-[400px]"
            />
            <button
              type="button"
              className="py-6 px-3 min-w-[400px] bg-[#0575E6] rounded-full my-4 text-white"
            >
              Login
            </button>
          </form>
          <p className="text-center">
            <Link href={"/"}>Forgot Password?</Link>
          </p>
          <p className="text-center">
            Don't have an account?{" "}
            <Link href={"/register"} className="text-blue-700">
              Create an account?
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
