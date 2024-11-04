import React, { useState } from "react";
import { toast } from "react-toastify"; // Nếu bạn đang sử dụng toast để hiển thị thông báo

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Giả sử bạn thực hiện gửi thông tin thanh toán đến API ở đây
    const paymentData = {
      cardNumber,
      cardHolderName,
      expirationDate,
      cvv,
    };

    // Giả lập gửi dữ liệu thanh toán
    console.log(paymentData);
    toast.success("Payment processed successfully!");
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Payment Information
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2" htmlFor="cardNumber">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
            placeholder="Enter your card number"
          />

          <label className="mb-2" htmlFor="cardHolderName">
            Cardholder Name:
          </label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
            placeholder="Enter your name as on the card"
          />

          <div className="flex space-x-2 mb-4">
            <div className="flex-1">
              <label className="mb-2" htmlFor="expirationDate">
                Expiration Date (MM/YY):
              </label>
              <input
                type="text"
                id="expirationDate"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="mb-2" htmlFor="cvv">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                placeholder="CVV"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-2 rounded transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
