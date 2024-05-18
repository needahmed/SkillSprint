"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const PaymentForm = () => {
  const [email, setEmail] = useState<string>("");
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    // Generate a unique order ID when the component mounts
    setOrderId(uuidv4());
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/create-payment",
        {
          email,
          order_id: orderId,
        }
      );

      const data = response.data;
      if (data.result && data.result.status_url) {
        window.location.href = data.result.status_url;
      } else {
        alert("Error creating payment");
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      alert("Error creating payment");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlePayment}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl mb-4 text-center font-semibold">
          Pay $5 with Solana
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="orderId"
            className="block text-sm font-medium text-gray-700"
          >
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Order ID"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Pay $5
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
