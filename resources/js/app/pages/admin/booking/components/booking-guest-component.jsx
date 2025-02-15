import { useState } from 'react';
import { Popover } from '@headlessui/react';

export default function BookingGuestComponent() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleIncrement = (type) => {
    if (type === "adults") setAdults((prev) => prev + 1);
    if (type === "children") setChildren((prev) => prev + 1);
  };

  const handleDecrement = (type) => {
    if (type === "adults" && adults > 1) setAdults((prev) => prev - 1);
    if (type === "children" && children > 0) setChildren((prev) => prev - 1);
  };

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold">
        <input
          readOnly
          type="text"
          value={`${adults} Adult${adults > 1 ? "s" : ""} | ${children} Children`}
          className="rounded-lg border border-gray-300 px-4 py-2 text-center text-gray-500 cursor-pointer"
        />
      </Popover.Button>

      <Popover.Panel
        className="absolute left-1/2 z-10 mt-3 w-72 -translate-x-1/2 bg-white rounded-lg shadow-lg ring-1 ring-teal-900/5 p-4"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Selection</h3>

        {/* Adults Counter */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700">Adults:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDecrement("adults")}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
            >
              -
            </button>
            <input
              type="text"
              value={adults}
              readOnly
              className="w-10 text-center border border-gray-300 rounded"
            />
            <button
              onClick={() => handleIncrement("adults")}
              className="px-3 py-1 bg-teal-600 text-white rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Children Counter */}
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Children:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDecrement("children")}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded"
            >
              -
            </button>
            <input
              type="text"
              value={children}
              readOnly
              className="w-10 text-center border border-gray-300 rounded"
            />
            <button
              onClick={() => handleIncrement("children")}
              className="px-3 py-1 bg-teal-600 text-white rounded"
            >
              +
            </button>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
