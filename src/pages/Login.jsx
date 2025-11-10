import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // future authentication logic here
    console.log("Login successful:", { email, password });
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50 relative">
      {/* Back to Home Button */}
      <div className="absolute top-5 left-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#ff4141] font-semibold hover:underline"
        >
          <span className="text-xl">←</span> Back to Home
        </Link>
      </div>

      {/* Login Form */}
      <div className="w-[90%] sm:w-[400px] bg-white p-8 rounded-2xl shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-start mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#ff4141] text-white py-2 rounded-lg mt-2 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#ff4141] font-medium cursor-pointer hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
