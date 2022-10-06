import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import WalletModal from "../WalletModal";
import { shortenAddress } from "../../utils";

function Web3StatusInner({
  toggleWalletModal,
}: {
  toggleWalletModal: () => void;
}) {
  const { address, isConnected } = useAccount();
  const [isConnectedWallet, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(isConnected);
  }, [isConnected]);

  return (
    <>
      {isConnectedWallet ? (
        // wallet address
        <button
          className="flex items-center px-1 text-sm font-medium text-gray-500 hover:text-gray-700 "
          id="web3-status-connected"
          onClick={toggleWalletModal}
        >
          <span className="inline-block w-3 h-3 pt-2 mr-2 bg-green-400 border-2 border-white rounded-full"></span>
          {address && <p>{shortenAddress(address)}</p>}
        </button>
      ) : (
        // connect wallet button
        <button
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
          id="connect-wallet"
          onClick={toggleWalletModal}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}

export default function Web3Status() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // wallet modal toggle function
  const toggleWalletModal = (): void => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Web3StatusInner toggleWalletModal={toggleWalletModal} />
      <WalletModal
        walletModalOpen={modalOpen}
        toggleWalletModal={toggleWalletModal}
      />
    </>
  );
}
