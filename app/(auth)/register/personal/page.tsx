"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Step1 = () => {
  const router = useRouter();

  // form validation for the input fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // check the length of the password
  const passwordLength = password.length;

  // i want to make sure that the password and the confirm password are the same. if they are not the same show an error message

  return (
    <div className="h-[96vh] rounded-lg flex flex-col justify-between w-full p-4">
      <div className="flex flex-col items-center p-0 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold px-4 md:px-20 w-full md:w-[40vw] text-center pt-10">
          Sign up for an account
        </h1>
        <h1 className="my-2 w-full text-center text-[#6A6A6A]">
          Get started today by entering just a few details
        </h1>
        <form className="flex flex-col w-[80vw] md:w-[30vw] my-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              className="w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400"
              required
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <input
              className="w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400"
              required
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </div>
          <div className="grid grid-cols-1 gap-5 my-5">
            <div>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400"
                required
                placeholder="Email"
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
              />
            </div>
            <div>
              <input
                className="w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400 mb-1"
                required
                placeholder="Enter Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* if password length is less than 8 characters show an error message. if empty show nothing. show bars with colors that change depending on the length of the password */}
              {passwordLength >= 8 ? (
                <div className="flex justify-between items-center gap-1 mt-1">
                  <div className="w-1/4 h-2 rounded-full bg-[#47A700]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#47A700]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#47A700]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#47A700]"></div>
                </div>
              ) : passwordLength >= 6 ? (
                <div className="flex justify-between items-center gap-1 mt-1">
                  <div className="w-1/4 h-2 rounded-full bg-[#85D947]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#85D947]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#85D947]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                </div>
              ) : passwordLength >= 4 ? (
                <div className="flex justify-between items-center gap-1 mt-1">
                  <div className="w-1/4 h-2 rounded-full bg-[#FBBC05]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#FBBC05]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                </div>
              ) : passwordLength >= 2 ? (
                <div className="flex justify-between items-center gap-1 mt-1">
                  <div className="w-1/4 h-2 rounded-full bg-[#F24A25]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                  <div className="w-1/4 h-2 rounded-full bg-[#EFEFEF]"></div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <input
                className={`w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400`}
                required
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
              {password !== confirmPassword && confirmPassword !== "" ? (
                <p className="font-semi-bold text-sm text-red-500">
                  Password does not match
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex items-start gap-1.5 justify-between md:justify-start w-full relative">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="text-xl scale-105 relative top-1"
            />
            <p className="text-sm">
              By creating an account, you agree to our{" "}
              <span className="text-[#2A63E2] font-bold cursor-pointer">
                terms and conditions
              </span>
            </p>
          </div>
          <button
            className="py-3 px-4 rounded-full w-full hover:bg-[#2a64e2f5] bg-[#2A63E2] text-white my-4 font-bold"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#2A63E2] font-bold cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <h1>View our GDPR & Privacy Policies </h1>
        <h1>Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Step1;
