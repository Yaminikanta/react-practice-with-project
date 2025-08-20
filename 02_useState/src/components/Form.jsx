import React, { useState } from 'react';

const  Form = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    altNumber: '',
  };

  const [form, setForm] = useState(initialState);
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col gap-3 max-w-sm w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <input
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter your name"
          className="border rounded p-2 bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Enter your email"
          className="border rounded p-2 bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Enter your password"
          type="password"
          className="border rounded p-2 bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          placeholder="Enter your mobile"
          className="border rounded p-2 bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          onChange={(e) => setForm({ ...form, altNumber: e.target.value })}
          placeholder="Enter your alternate number"
          className="border rounded p-2 bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default Form;
