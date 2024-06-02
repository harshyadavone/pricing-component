import React from 'react';

const Switch = ({ isYearly, setIsYearly }) => {
  const handleChange = () => {
    setIsYearly(!isYearly); // Toggle the isYearly state
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        id="switch"
        type="checkbox"
        className="peer sr-only"
        checked={isYearly}
        onChange={handleChange}
      />
      <label htmlFor="switch" className="hidden"></label>
      <div className="peer h-6 w-11 rounded-full border bg-gray-200 dark:bg-gray-600 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-400 dark:peer-checked:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-blue-300 dark:peer-focus:ring-green-300"></div>
    </label>
  );
};

export default Switch;
