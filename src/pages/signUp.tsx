import React, { useState } from "react";
import RestuarentService from "../services/Resturent.service";

const SignUp = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    email: "",
    restaurantName: "",
    password: "",
    confirmPassword: "",
    city: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fletchData = async (formData) => {
    try {
         const response =await RestuarentService.addResturent(formData);
    } catch (error) {
      console.log(error);
    }
   
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fletchData(formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://example.com/background-image.jpg')", // Replace with your background image URL
      }}
    >
      {/* Left side: Sign Up Form */}
      <div className="lg:w-1/2 flex items-center justify-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="w-full max-w-md p-8">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Sign Up</h2>

          {/* Sign Up Form */}
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

            {/* Restaurant Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="restaurantName">
                Restaurant Name
              </label>
              <input
                type="text"
                name="restaurantName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your restaurant name"
                value={formData.restaurantName}
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

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {/* Location Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                name="city"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your location"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
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
  );
};

export default SignUp;