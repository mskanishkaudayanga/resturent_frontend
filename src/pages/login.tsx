import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestuarentService from "../services/Resturent.service";
import authServices from "../services/Auth.services";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleLogin = async (formData: any) => {
  //   try {
  //     const response = await RestuarentService.login(formData);
  //     if (response) {
  //       setAlertMessage("Login successful!");
  //       setAlertVisible(true);
  //       // Optionally redirect after successful login
  //       navigate("/dashboard"); // Adjust the path based on your app's structure
  //     }
  //   } catch (error) {
  //     setAlertMessage("Login failed! Please try again.");
  //     setAlertVisible(true);
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   const Log = await  authServices.login(formData);
    console.log("login",Log);
  setFormData({
    email: "",
    password: "",
  })
  
  };

  return (
    <>
   
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://example.com/background-image.jpg')", // Adjust the background URL
      }}
    >
      {/* Left side: Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center bg-white bg-opacity-80 p-8 rounded-lg">
        <div className="w-full max-w-md p-8">

          {/* Alert Message */}
          {alertVisible && (
            <div
              className={`w-full p-4 mb-4 text-white ${
                alertMessage.includes("successful")
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-lg`}
            >
              {alertMessage}
            </div>
          )}

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
            Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Sign Up Button */}
          <div className="flex justify-center items-center mt-4">
            <p className="mr-2">Don't have an account?</p>
            <button
              onClick={() => navigate("/signup")}
              className="text-green-500 bg-white hover:bg-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="lg:w-1/2 hidden lg:block">
        <img
          src="https://example.com/your-right-side-image.jpg" // Replace with your image URL
          alt="Restaurant"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
     </>
  );
};

export default Login;
