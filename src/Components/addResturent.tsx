import React, { useState } from 'react';
import { Card, Button, Label, TextInput } from 'flowbite-react';
import RestuarentService from '../services/Resturent.service';

const AddResturent = () => {
  const [form, setForm] = useState({
    id: '',
    resturentName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  
  const [drawerOpen, setDrawerOpen] = useState(false); // To control drawer state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fletchData = async (formData:any) => {
    const response =await RestuarentService.addResturent(formData);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); 
    await fletchData(form);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle drawer
  };

  return (
    <div>
      {/* Button to open the drawer */}
      <Button className="bg-[#1A4D2E] hover:bg-[#1A4D2E]" onClick={toggleDrawer}>
        Add Restaurant
      </Button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h3 className="text-2xl font-bold text-gray-900">Add Restaurant</h3>
          <button className="text-2xl font-bold text-gray-700 hover:text-red-500" onClick={toggleDrawer}>
            &times;
          </button>
        </div>

        <div className="p-4">
          <Card className="shadow-none">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="resturentName" value="Restaurant Name" />
                <TextInput
                  id="resturentName"
                  name="resturentName"
                  placeholder="Enter restaurant name"
                  value={form.resturentName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <Label htmlFor="phoneNumber" value="Phone Number" />
                <TextInput
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter phone number"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#1A4D2E] hover:bg-[#1A4D2E]">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Overlay for closing drawer by clicking outside */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default AddResturent;
