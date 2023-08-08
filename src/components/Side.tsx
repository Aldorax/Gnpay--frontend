import Image from "next/image";
import React from "react";
import image from "@/app/logo.png";
import Link from "next/link";

type Props = {};

const Side = (props: Props) => {
  return (
    <div className="max-w-[50vw] min-w-[35vw] min-h-[95vh] bg-[#2A63E2] rounded-lg relative flex flex-col items-start justify-center">
      <div className="absolute top-10 left-10">
        <Link
          href={"/login"}
          className="flex text-3xl text-white font-bold items-center gap-3"
        >
          <Image
            src={image}
            alt="dk"
            className="mx-auto"
            width={50}
            height={50}
          />
          <h1>Gnpay Africa</h1>
        </Link>
      </div>
      <div className="mx-12 text-white">
        <h1 className="text-7xl font-bold mb-4">Unlock Your Dreams.</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, ipsam?
        </p>
      </div>
    </div>
  );
};

export default Side;
