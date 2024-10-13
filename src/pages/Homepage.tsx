import React, { useState } from "react";
import ResturentCard from "../Components/resturentCard"; // Your card component

const categories = ["All", "Starters", "Main Courses", "Side Dishes", "Desserts"];

const Homepage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="p-8">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">Explore Restaurants</h1>
                <p className="text-gray-500">Find the best restaurants and dishes in your city.</p>
            </header>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    className="w-full max-w-xl p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Search restaurants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Category Filters */}
            <div className="flex justify-center space-x-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full text-sm font-semibold 
                            ${selectedCategory === category ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}
                        `}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Restaurant Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example cards - replace with dynamic data */}
                <ResturentCard data={{ resturantName: "KFC", location: "DHA" }} />
                <ResturentCard data={{ resturantName: "McDonald's", location: "Gulberg" }} />
                <ResturentCard data={{ resturantName: "Subway", location: "Model Town" }} />
                {/* Repeat card component */}
            </div>
        </div>
    );
};

export default Homepage;
