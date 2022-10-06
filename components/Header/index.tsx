import React from "react";
import Image from "next/image";
import Web3Status from "../Web3Status";

// Header
export default function Header() {
  return (
    <div className="bg-white shadow w-full py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Image
          src="https://tailwindui.com/img/logos/mark.svg"
          width="47px"
          height="40px"
          alt=""
        />
        <Web3Status />
      </div>
    </div>
  );
}
