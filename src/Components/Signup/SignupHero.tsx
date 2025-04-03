import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/signup-image.jpg";
import log from "../../assets/airbnb logo.jpg";

function SignupHero() {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{10,15}$/; // Allows 10 to 15 digits
    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
    return true;
  };
  return (
    <div>
      <div
        className="flex flex-col bg-fuchsia-400 items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Form Container */}
        <div className="w-full max-w-md bg- p-6 rounded-2xl shadow-lg md:max-w-lg lg:max-w-xl shadow-fuchsia-300">
          {step === "phone" && (
            <div>
              <div className="flex justify-center mb-6">
                <img className="animate-pulse bg-none" src={log} alt="" />
                <h2 className="text-3xl text-white font-semibold mb-4 animate-bounce">
                  Welcome to Airbnb
                </h2>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Country/Region
                </label>
                <select className="w-full mt-1 p-2 border rounded-lg bg-gray-50">
                  <option>United Kingdom (+44)</option>
                  <option>United States (+1)</option>
                  <option>Canada (+1)</option>
                  <option>Australia (+61)</option>
                  <option>India (+91)</option>
                  <option>Nigeria (+234)</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Phone number
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium mb-4"
                onClick={() => {
                  if (validatePhoneNumber()) {
                    setStep("email");
                  }
                }}
              >
                Continue
              </button>

              {/* Social Sign-Up Buttons */}
              <div className="flex flex-col gap-2">
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-blue-600 hover:bg-blue-50 bg-white">
                  <FaFacebook className="mr-2" /> Sign up with Facebook
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-red-600 hover:bg-red-50 bg-white">
                  <FaGoogle className="mr-2" /> Sign up with Google
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-black hover:bg-gray-100  bg-white">
                  <FaApple className="mr-2" /> Sign up with Apple
                </button>
                <button className="w-full flex items-center justify-center border p-2 rounded-lg text-gray-600 hover:bg-gray-50  bg-white">
                  <FaEnvelope className="mr-2" /> Sign up with Email
                </button>
              </div>
            </div>
          )}

          {/* Step: Email */}
          {step === "email" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center animate-bounce text-white">
                Welcome to Airbnb
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
                onClick={() => {
                  if (validateEmail()) {
                    setStep("register");
                  }
                }}
              >
                Continue
              </button>
            </div>
          )}

          {/* Step: Register */}
          {step === "register" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center animate-bounce text-white">
                Create an account
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg font-medium"
                onClick={() => {
                  if (validatePasswords()) {
                    navigate("/login");
                  }
                }}
              >
                Agree and continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignupHero
