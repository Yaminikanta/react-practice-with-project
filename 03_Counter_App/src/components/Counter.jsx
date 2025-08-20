import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <p className="text-gray-800 text-lg font-semibold mb-6">
          The number is now <span className="text-indigo-600 font-bold">{count}</span>
        </p>

        <div className="flex justify-between space-x-4">
          <button
            onClick={handleDecrement}
            className="px-5 py-2 bg-red-500 text-white font-medium rounded-xl shadow-md 
                       hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out"
          >
            Decrement
          </button>
          <button
            onClick={handleIncrement}
            className="px-5 py-2 bg-green-500 text-white font-medium rounded-xl shadow-md 
                       hover:bg-green-600 hover:scale-105 transition transform duration-200 ease-in-out"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
