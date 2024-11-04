import React, { useState } from "react";
import ConfirmDeleteModal from "../helpers/ConfirmDeleteModal";
import { toast } from "react-toastify";

const AdminDeleteProduct = ({ productId, onDeleteSuccess, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/products/delete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ _id: productId }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete the product: ${errorText}`);
      }

      toast.success("Product deleted successfully!");
      onDeleteSuccess();
      onClose();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="bg-red-600 text-white p-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Delete Product
      </button>

      {showModal && (
        <ConfirmDeleteModal
          onConfirm={() => {
            handleDelete();
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AdminDeleteProduct;
