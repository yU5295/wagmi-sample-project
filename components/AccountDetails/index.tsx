import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import Close from "assets/images/x.svg";
import Image from "next/image";

// account details
export default function AccountDetails({
  toggleWalletModal,
}: {
  toggleWalletModal: () => void;
}) {
  // wallet address, connector info
  const { address, connector } = useAccount();
  // wallet disconnect function
  const { disconnect } = useDisconnect();

  return (
    <div>
      {/* Modal header */}
      <div className="flex justify-between text-gray-800 text-lg mb-4">
        Account
        <div className="cursor-pointer" onClick={toggleWalletModal}>
          <Image src={Close} alt="" />
        </div>
      </div>
      {/* Modal content */}
      <div className="border border-solid border-gray-200 rounded-lg p-4">
        <div className="mb-3 flex justify-between">
          <div>Connected to {connector?.name}</div>
          {/* disconnect button */}
          <button
            className="cursor-pointer border border-solid border-green-400 px-2 rounded-lg"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
        {/* wallet address */}
        <div className="break-all">{address}</div>
      </div>
    </div>
  );
}
