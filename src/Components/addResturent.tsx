import React, { useState } from 'react';
import { Card, Button, Label, TextInput } from 'flowbite-react';

const AddResturent = () => {
  const [form, setForm] = useState({
    id: '',
    resturentName: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Handle form submission logic
  };

  return (
    <div className="flex justify-center items-center h-screen w-[50%]">
      <Card className="max-w-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-5 text-gray-900">Add Restaurant</h3>
        
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

          <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddResturent;
