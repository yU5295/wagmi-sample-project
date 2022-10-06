import React from "react";
import Image from "next/image";
import MetaMaskIcon from "../../assets/images/metaMask.png";
import CoinBaseIcon from "../../assets/images/coinbaseWallet.svg";
import WalletConnectIcon from "../../assets/images/walletConnect.svg";

export default function Option({
  name,
  iconname,
  onClick,
}: {
  name: string;
  iconname: string;
  onClick: () => void;
}) {
  return (
    <div
      className="w-full flex justify-between cursor-pointer bg-gray-100 p-3 rounded-lg"
      onClick={onClick}
    >
      <p className="text-black">{name}</p>

      {/* Wallet Image */}
      {iconname === "metaMask" ? (
        <Image src={MetaMaskIcon} width="24px" height="24px" alt="metamask" />
      ) : iconname === "coinbaseWallet" ? (
        <Image src={CoinBaseIcon} width="24px" height="24px" alt="coinbase" />
      ) : iconname === "walletConnect" ? (
        <Image
          src={WalletConnectIcon}
          width="24px"
          height="24px"
          alt="walletconnect"
        />
      ) : (
        ""
      )}
    </div>
  );
}
