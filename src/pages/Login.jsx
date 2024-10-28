import React, { useState, useRef } from "react";
import { FaEye, FaEyeSlash, FaQuestionCircle } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const inputRefs = useRef([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];

    // If user enters a number
    if (/^[0-9]$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if available
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

 
  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault(); // Prevent the default backspace behavior
      const newOtp = [...otp];
      
      // Clear the current box if it's not already empty
      if (newOtp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to the previous input and clear it
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };


  const sendOtp = () => {
    // Send OTP API logic goes here
    alert("OTP Sent!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 bg-white p-8  rounded-lg">
        {/* Heading 1: Recruiter Login */}
        <h1 className="text-black font-bold text-3xl mb-2">Recruiter Login</h1>

        {/* Heading 2: Login to access your dashboard */}
        <h2 className="text-gray-500 text-sm mb-6">
          Login to access your dashboard.
        </h2>

        <hr className="border-gray-300 mb-6" />

        {/* Heading 3: Username with "?" icon */}
        <label className="block text-red-600 mb-1 font-semibold flex items-center">
          * Username <FaQuestionCircle className="ml-1 text-gray-400" />
        </label>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-xl focus:outline-none"
          placeholder="Enter your username"
        />

        {/* Heading 4: Password with "?" icon and eye icon */}
        <label className="block text-red-600 mb-1 font-semibold flex items-center">
          * Password <FaQuestionCircle className="ml-1 text-gray-400" />
        </label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-between space-x-4 mb-4">
          {/* Heading 5: Enter OTP with "?" icon */}
          <div className="w-1/2">
            <label className="block text-red-600 mb-1 font-semibold flex items-center">
              * Enter OTP <FaQuestionCircle className="ml-1 text-gray-400" />
            </label>
          </div>

          {/* Send OTP link */}
          <div className="w-1/2 text-right">
            <button
              onClick={sendOtp}
              className="text-[#9D4EDD] font-semibold focus:outline-none"
            >
              Send OTP
            </button>
          </div>
        </div>

        {/* OTP input boxes */}
        <div className="flex justify-around mb-6">
  {otp.map((digit, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      className="w-12 h-12 p-2 border border-gray-300 text-center rounded-lg focus:outline-none focus:border-2 focus:border-purple-600 transition-all"
      value={digit}
      onChange={(e) => handleOtpChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      ref={(el) => (inputRefs.current[index] = el)} // Reference for focusing
    />
  ))}
</div>

        {/* Login Button */}
        <button className="bg-[#9D4EDD] text-white font-semibold w-20 py-2 rounded-lg hover:bg-purple-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
