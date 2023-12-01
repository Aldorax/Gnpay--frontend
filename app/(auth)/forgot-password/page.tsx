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
          Forgot Password?
        </h1>
        <h1 className="my-2 w-full text-center text-[#6A6A6A]">
          Enter your email address and we will send you a code to reset your
          password.
        </h1>
        <form className="flex flex-col w-[80vw] md:w-[30vw] my-4">
          <div className="grid grid-cols-1 gap-5">
            <input
              className="w-full border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400"
              required
              placeholder="Email"
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
            />
          </div>
          <Link
            href="/forgot-password/verify"
            className="py-3 px-4 rounded-full w-full hover:bg-[#2a64e2f5] bg-[#2A63E2] text-white my-4 font-bold text-center"
            type="submit"
          >
            Submit
          </Link>
          <p className="text-center text-sm mt-4">
            Remember your password?{" "}
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
