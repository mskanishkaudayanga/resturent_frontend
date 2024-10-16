import React, { useEffect, useState } from "react";
import RestuarentService from "../services/Resturent.service";

const RestaurantPage = () => {
  // Define the menu categories and dishes
 const menus = {
    Breakfast: [
      {
        name: "Pancakes",
        description: "Fluffy pancakes with syrup",
        price: "$8.99",
        image: "../../public/r.jpeg", // Replace with actual image URLs
      },
      {
        name: "Omelette",
        description: "Three eggs with veggies",
        price: "$7.99",
        image: "../../public/r.jpeg",
      },
       {
        name: "Pancakes",
        description: "Fluffy pancakes with syrup",
        price: "$8.99",
        image: "../../public/r.jpeg", // Replace with actual image URLs
      },
      {
        name: "Omelette",
        description: "Three eggs with veggies",
        price: "$7.99",
        image: "../../public/r.jpeg",
      },
    ],
    Lunch: [
      {
        name: "Cheeseburger",
        description: "Juicy beef burger with cheese",
        price: "$12.99",
        image: "https://example.com/cheeseburger.jpg",
      },
      {
        name: "Caesar Salad",
        description: "Fresh romaine with Caesar dressing",
        price: "$10.99",
        image: "https://example.com/caesarsalad.jpg",
      },
    ],
    Dinner: [
      {
        name: "Steak",
        description: "Grilled rib-eye steak",
        price: "$22.99",
        image: "https://example.com/steak.jpg",
      },
      {
        name: "Spaghetti",
        description: "Spaghetti with marinara sauce",
        price: "$14.99",
        image: "https://example.com/spaghetti.jpg",
      },
    ],
    Drinks: [
      {
        name: "Coffee",
        description: "Hot brewed coffee",
        price: "$2.99",
        image: "https://example.com/coffee.jpg",
      },
      {
        name: "Soda",
        description: "Chilled soda can",
        price: "$1.99",
        image: "https://example.com/soda.jpg",
      },
    ],
  };
  const [menu,setMenu]=useState({});

  const fletchMenu= async()=>{
    const response = await RestuarentService.getResturentByid("1");
    setMenu(response.data.menu);
  }
  
  useEffect(() => {
    fletchMenu();
  }, []);
  console.log("meeee",menu);
  const [selectedMenu, setSelectedMenu] = useState("Breakfast");
  return (
    <div>
      {/* Full-width Hero Image */}
      <div className="relative w-full h-64 lg:h-96">
        <img
          src="../../public/r.jpeg"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Restaurant Info Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:flex lg:items-start lg:space-x-8">
        {/* Restaurant Name and Description */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Restaurant Name</h1>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
          </p>

          {/* Restaurant Details */}
          <div className="space-y-2">
            <p><strong>Location:</strong> 123 Main Street, City</p>
            <p><strong>Opening Hours:</strong> 9:00 AM - 11:00 PM</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
          </div>
        </div>

        {/* Additional Info or Side Section */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Oders</h2>
            <p className="text-gray-600 mb-6">
              You can place your order online and enjoy your meal at our restaurant.
            </p>
            <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Menu Tabs */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-4">
            {Object.keys(menus).map((menu) => (
              <button
                key={menu}
                className={`py-2 px-4 font-semibold text-lg ${
                  selectedMenu === menu
                    ? "bg-green-500 text-white rounded-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMenu(menu)}
              >
                {menu}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
     <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">{selectedMenu} Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus[selectedMenu].map((dish, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-2">{dish.description}</p>
                <p className="font-bold">{dish.price}</p>
              </div>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 object-cover rounded-md ml-4" // Adjust size as needed
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white text-center">
            &copy; 2024 Restaurant Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantPage;
