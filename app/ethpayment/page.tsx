"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { parseEther } from "@ethersproject/units";
import { Toaster, toast } from "sonner";

declare global {
  interface Window {
    ethereum: any;
  }
}

const PaymentPage = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [message, setMessage] = useState(
    "Pay 0.002 Sepolia ETH for the service"
  );
  const [signature, setSignature] = useState<string>("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        setAccount(account);
        toast.success("Wallet connected successfully!");
      } catch (error) {
        toast.error("Failed to connect wallet!");
        console.error(error);
      }
    } else {
      toast.error("MetaMask is not installed!");
    }
  };

  const signMessage = async () => {
    if (account && message) {
      try {
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signature = await signer.signMessage(message);
        setSignature(signature);
        toast.success("Message signed successfully!");
      } catch (error) {
        toast.error("Failed to sign message!");
        console.error(error);
      }
    }
  };

  const sendTransaction = async () => {
    if (account) {
      try {
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
          to: "0x9148a7465DA23c55a20b404f9420009cbD11B9eA", // Replace with your recipient address
          value: parseEther("0.002"), // $5 equivalent in Sepolia ETH (replace with the current value)
        });
        await tx.wait();
        toast.success("Transaction successful!");
      } catch (error) {
        toast.error("Failed to send transaction!");
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-creme relative isolate">
      <Toaster richColors />
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 items-center justify-center text-center">
        Crypto Payment (Sepolia Testnet)
      </h1>
      
      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Connect Wallet
      </button>
      
      {account && (
        <>
          <p className="mb-4">Connected account: {account}</p>
          <button
            onClick={signMessage}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Sign Message
          </button>
          {signature && <p className="mb-4">Signature: {signature}</p>}
          <button
            onClick={sendTransaction}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Pay 0.002 Sepolia ETH
          </button>
        </>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[-10%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[-20%] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default PaymentPage;
