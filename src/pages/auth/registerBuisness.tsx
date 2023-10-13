import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";
import image from "@/app/logo.png";
import Image from "next/image";
import Side from "@/components/Side";

const RegisterBuisness = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Calculate the password strength and assign the corresponding color
  const getPasswordStrengthColor = (password: string): string => {
    const strength = password.length;
    if (strength === 0) return "transparent";
    if (strength <= 1) return "red";
    if (strength <= 6) return "#FBBC05";
    if (strength <= 12) return "lightgreen";
    return "darkgreen";
  };

  const getPasswordStrengthLabel = (password: string): string => {
    const strength = password.length;
    if (strength == 0) return "";
    if (strength <= 1) return "Bad";
    if (strength <= 6) return "Fair";
    if (strength <= 8) return "Good";
    return "Very Good";
  };

  // Check if the password and confirm password match
  const passwordsMatch = password === confirmPassword;

  return (
    <main className="md:max-w-screen md:max-h-screen bg-white flex flex-col md:flex-row p-6 overflow-x-hidden">
      <div className="hidden md:flex">
        <Side />
      </div>

      <div className="md:max-w-[60vw] max-w-screen min-w-screen md:min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3">
            Sign up for an account
          </h1>
          <p className="text-[#77787D]">
            Get started today by entering just a few details
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <div className="flex gap-2 mb-4 md:flex-row flex-col w-[440px]">
            <div className="flex flex-col">
              <label htmlFor="firstname"></label>
              <input
                type="text"
                name="Fname"
                id="firstname"
                placeholder="First Name"
                className={`text-[#77787D] px-4 py-3 rounded-lg w-full md:min-w-[200px] border border-black/10`}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastname"></label>
              <input
                type="text"
                name="Lname"
                id="lastname"
                placeholder="Last Name"
                className={`text-[#77787D] px-4 py-3 rounded-lg min-w-[200px] border border-black/10`}
              />
            </div>
          </div>
          <div className="mb-4 w-[440px]">
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email adsress"
                className={`text-[#77787D] px-4 py-3 rounded-lg min-w-full border border-black/10`}
              />
            </div>
          </div>
          <div className="mb-1 w-[440px]">
            <div>
              <input
                type="password"
                name="pswd"
                id="pswd"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-[#77787D] px-4 py-3 rounded-lg w-full border border-black/10`}
              />
              <label htmlFor="pswd"></label>
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "0",
                  fontSize: "12px",
                  textDecorationColor: "red",
                  color: getPasswordStrengthColor(password),
                }}
                className="font-bold"
              >
                {getPasswordStrengthLabel(password)}
              </div>
            </div>
            {/* Render the password strength bars only when the password is not empty */}
            {password && (
              <div className="flex justify-between mb-4">
                {/* Render the color bars dynamically based on password strength */}
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor: getPasswordStrengthColor(password),
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "#FBBC05"
                        ? "#FBBC05"
                        : getPasswordStrengthColor(password) === "lightgreen"
                        ? "lightgreen"
                        : getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "#FBBC05"
                        ? "transparent"
                        : getPasswordStrengthColor(password) === "lightgreen"
                        ? "lightgreen"
                        : getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                />
                <div
                  style={{
                    height: "10px",
                    width: "25%",
                    position: "relative",
                    backgroundColor:
                      getPasswordStrengthColor(password) === "darkgreen"
                        ? "darkgreen"
                        : "transparent",
                    borderRadius: "5px",
                    margin: "2px",
                  }}
                ></div>
              </div>
            )}

            {/* Render the password confirmation text */}
            {confirmPassword && !passwordsMatch && (
              <p className="text-red-500 text-sm">Passwords do not match!</p>
            )}

            <div className="mt-3">
              <input
                type="password"
                name="pswd2"
                id="pswd2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`text-[#77787D] px-4 py-3 rounded-lg w-full border border-black/10`}
              />
              <label htmlFor="pswd2"></label>
            </div>
          </div>
          <div className="text-medium w-[435px] my-4 text-start gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              id="Rmbe"
              title="e"
              placeholder=" "
              className="rounded-none"
            />
            <label htmlFor="remember" className="mx-2">
              By creating an account, you agree to our{" "}
              <span className="text-[#2A63E2] font-semibold cursor-pointer">
                terms and conditions
              </span>
            </label>
          </div>
          <Link
            href={"/verify-email"}
            className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-4"
          >
            Sign Up
          </Link>
        </form>
        <p className=" mb-48 text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-[#2A63E2] font-semibold cursor-pointer"
          >
            Log In
          </Link>
        </p>
        <div className="flex items-center justify-between w-full absolute bottom-10 px-10">
          <div className="text-sm">
            View our{" "}
            <span className="underline cursor-pointer">
              GDPR & Privacy Policies{" "}
            </span>
          </div>
          <div className="text-[#77787D] text-sm">Copyright 2023</div>
        </div>
      </div>
    </main>
  );
};

export default RegisterBuisness;
