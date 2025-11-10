import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Email Validation
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // 🔹 Name Validation (no numbers allowed)
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

  // 🔹 Check overall form validity
  const isFormValid =
    formData.name.trim() !== "" &&
    validateName(formData.name) &&
    validateEmail(formData.email) &&
    formData.password.length >= 6 &&
    formData.password === formData.confirmPassword &&
    formData.agree;

  // 🔹 Input Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(formData.name)) {
      setError("Name should only contain letters (no numbers allowed).");
      return;
    }

    if (!isFormValid) {
      setError("Please fill all fields correctly before continuing.");
      return;
    }

    setError("");
    console.log("✅ Registered successfully:", formData);
    alert("Registration successful!");
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-50 relative">
      {/* 🔙 Back to Home */}
      <div className="absolute top-5 left-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#ff4141] font-semibold hover:underline"
        >
          <span className="text-xl">←</span> Back to Home
        </Link>
      </div>

      {/* 🧾 Register Form */}
      <div className="w-[90%] sm:w-[400px] bg-white p-8 rounded-2xl shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-start mb-6 text-gray-800">
          Register Now
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`border rounded-lg px-4 py-2 focus:outline-none w-full ${
              formData.name && !validateName(formData.name)
                ? "border-red-500"
                : "border-gray-300 focus:border-black"
            }`}
          />
          {formData.name && !validateName(formData.name) && (
            <p className="text-red-500 text-sm">
              Name should only contain letters, not numbers.
            </p>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password (min 6 characters)"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black w-full"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black w-full"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Continue Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-lg mt-2 transition cursor-pointer text-white 
              ${
                isFormValid
                  ? "bg-[#ff4141] hover:bg-[#e63c3c]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Continue
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ff4141] font-medium cursor-pointer hover:underline"
          >
            Login here
          </Link>
        </p>

        {/* Terms */}
        <div className="flex items-start gap-2 mt-5 text-xs text-gray-500">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 cursor-pointer"
          />
          <p>
            By continuing, I agree to the{" "}
            <span className="text-black font-medium cursor-pointer hover:underline">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className="text-black font-medium cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
