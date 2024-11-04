import React, { useState } from "react";
import { toast } from "react-toastify"; // Nếu bạn đang sử dụng toast để hiển thị thông báo

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Thực hiện gửi yêu cầu đặt lại mật khẩu
    // (Giả sử bạn đã có API để xử lý yêu cầu này)
    const response = await fetch("/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("An email has been sent to reset your password.");
    } else {
      toast.error(data.message || "Failed to send email. Please try again.");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
