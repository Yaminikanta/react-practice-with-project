import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <p className="text-xl mb-4">You have clicked {count}</p>
      <button 
        onClick={handleIncrement} 
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
