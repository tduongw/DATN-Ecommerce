import React from "react";

const DisplayAddressInfo = () => {
  const sampleData = {
    address: "123 Main St",
    city: "Hanoi",
    pincode: "100000",
    phone: "0123456789",
    notes: "Near the old market",
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Address Information
      </h2>

      {/* Address */}
      <div className="mb-4 flex">
        <label className="text-gray-700 font-medium mr-2">Address:</label>
        <span className="text-gray-600">
          {sampleData.address || "No address provided"}
        </span>
      </div>

      {/* City */}
      <div className="mb-4 flex">
        <label className="text-gray-700 font-medium mr-2">City:</label>
        <span className="text-gray-600">
          {sampleData.city || "No city provided"}
        </span>
      </div>

      {/* Pincode */}
      <div className="mb-4 flex">
        <label className="text-gray-700 font-medium mr-2">Pincode:</label>
        <span className="text-gray-600">
          {sampleData.pincode || "No pincode provided"}
        </span>
      </div>

      {/* Phone */}
      <div className="mb-4 flex">
        <label className="text-gray-700 font-medium mr-2">Phone:</label>
        <span className="text-gray-600">
          {sampleData.phone || "No phone number provided"}
        </span>
      </div>

      {/* Notes */}
      <div className="mb-4 flex">
        <label className="text-gray-700 font-medium mr-2">Notes:</label>
        <span className="text-gray-600">
          {sampleData.notes || "No notes provided"}
        </span>
      </div>
    </div>
  );
};

export default DisplayAddressInfo;
