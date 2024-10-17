import React, { useEffect, useState } from "react";
import { Modal, TimePicker, Input, Button, Form } from "antd";
import RestuarentService from "../services/Resturent.service";
import { Resturant } from "../Type/index.d";
import moment from "moment";

const AuthRestaurantPage = () => {
  const [menu, setMenu] = useState({});
  const [resturantDetails, setResturantDetails] = useState<Resturant>(
    {} as Resturant
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const fetchMenu = async () => {
    const response = await RestuarentService.getResturentByid("1");
    setResturantDetails(response.data);
    setMenu(response.data.menu);
  };

  useEffect(() => {
    fetchMenu();
    console.log("resturantDetails", resturantDetails);
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      restaurantName: resturantDetails.restaurantName,
      description: resturantDetails.discription,
      location: resturantDetails.location,
      phoneNumber: resturantDetails.phoneNumber,
      city: resturantDetails.city, // assuming there is a 'city' field
    openTime: resturantDetails.openTime ? moment(resturantDetails.openTime, "HH:mm") : null,
  closeTime: resturantDetails.closeTime ? moment(resturantDetails.closeTime, "HH:mm") : null,
    });
  };

  const handleOk = async (values: any) => {
    const updatedDetails = {
      ...resturantDetails,
      restaurantName: values.restaurantName,
      discription: values.description,
      location: values.location,
      phoneNumber: values.phoneNumber,
      city: values.city,
      openTime: values.openTime ? values.openTime.format("HH:mm") : null,
    closeTime: values.closeTime ? values.closeTime.format("HH:mm") : null,
    };

    // Send the updated details to the backend (API call)
     await RestuarentService.updateResturantDetails("1", updatedDetails);

    // Update the state after successful update
    setResturantDetails(updatedDetails);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            {resturantDetails?.restaurantName}
          </h1>
          <p className="text-gray-700 mb-6">{resturantDetails?.discription}</p>

          {/* Restaurant Details */}
          <div className="space-y-2">
            <p>
              <strong>Location:</strong> {resturantDetails.location}
            </p>
            <p>
              <strong>Opening Hours:</strong> {resturantDetails?.openTime} AM -{" "}
              {resturantDetails?.closeTime} PM
            </p>
            <p>
              <strong>Phone:</strong> {resturantDetails?.phoneNumber}
            </p>
          </div>

          {/* Button to trigger the update modal */}
          <Button
            type="primary"
            className="mt-4 bg-green-500"
            onClick={showModal}
          >
            Update Restaurant Details
          </Button>
        </div>

        {/* Additional Info or Side Section */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <p className="text-gray-600 mb-6">
              You can place your order online and enjoy your meal at our
              restaurant.
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
            {Object.keys(menu).map((menuCategory) => (
              <button
                key={menuCategory}
                className={`py-2 px-4 font-semibold text-lg ${
                  selectedMenu === menuCategory
                    ? "bg-green-500 text-white rounded-md"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMenu(menuCategory)}
              >
                {menuCategory}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      
<div className="max-w-6xl mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-6">{selectedMenu} Menu</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {(menu[selectedMenu] || []).map((dish, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
          <p className="text-gray-600 mb-2">{dish.description}</p>
          <p className="font-bold">{dish.price}</p>
        </div>
        <img
          src={dish.image}
          alt={dish.name}
          className="w-20 h-20 object-cover rounded-md ml-4"
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

      {/* Modal for updating restaurant details */}
      <Modal
        title="Update Restaurant Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleOk} layout="vertical">
          <Form.Item
            label="Restaurant Name"
            name="restaurantName"
            rules={[{ required: true, message: "Please input the restaurant name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input the description!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
           <Form.Item
    label="Phone Number"
    name="phoneNumber"
    rules={[
      { required: true, message: "Please enter your phone number!" },
      {
        pattern: /^[0-9]{10}$/,
        message: "Please enter a valid 10-digit phone number!",
      },
    ]}
  >
    <Input placeholder="Enter your phone number" />
  </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please input the location!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input the city!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Opening Time"
            name="openTime"
            rules={[{ required: true, message: "Please select opening time!" }]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>

          <Form.Item
            label="Closing Time"
            name="closeTime"
            rules={[{ required: true, message: "Please select closing time!" }]}
          >
            <TimePicker format="HH:mm" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-green-500"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AuthRestaurantPage;
