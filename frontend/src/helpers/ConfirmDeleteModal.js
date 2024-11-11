import React from "react";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-center text-lg font-bold">Confirm Deletion</h2>
        <p className="text-center">
          Are you sure you want to delete this product?
        </p>
        <div className="flex justify-around mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button className="bg-gray-300 p-2 rounded" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
