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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Toaster richColors />
      <h1 className="text-4xl font-bold mb-8">
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
    </div>
  );
};

export default PaymentPage;
