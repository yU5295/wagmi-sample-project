import React, { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import AccountDetails from "../AccountDetails";
import Modal from "../Modal";
import Option from "./Option";
import Image from "next/image";
import Close from "assets/images/x.svg";

export default function WalletModal({
  walletModalOpen,
  toggleWalletModal,
}: {
  walletModalOpen: boolean;
  toggleWalletModal: () => void;
}) {
  // wallet connection status
  const { isConnected } = useAccount();
  // wallet connection infomation
  const { connect, connectors } = useConnect();
  const [isConnectedWallet, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    setIsConnected(isConnected);
  }, [isConnected]);

  // wallet options (metamask, coinbase, walletconnect)
  function getOptions() {
    return (
      <div className="flex flex-col gap-2">
        {connectors.map((connector) => (
          <Option
            key={connector.id}
            name={connector.name}
            onClick={() => connect({ connector })}
            iconname={connector.id}
          />
        ))}
      </div>
    );
  }

  // WalletModal content
  function getModalContent() {
    // wallet account details
    if (isConnectedWallet) {
      return <AccountDetails toggleWalletModal={toggleWalletModal} />;
    }

    // wallet connect modal content
    return (
      <div className="relative">
        <div className="flex justify-between text-gray-800 text-lg mb-4">
          Connect to a wallet
          <div className="cursor-pointer" onClick={toggleWalletModal}>
            <Image src={Close} alt="" />
          </div>
        </div>
        {getOptions()}
      </div>
    );
  }

  return (
    <Modal isOpen={walletModalOpen} onDismiss={toggleWalletModal}>
      <div className="w-full p-0 m-0">{getModalContent()}</div>
    </Modal>
  );
}
