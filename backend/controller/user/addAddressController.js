const Address = require("../../models/addressUser");

const addAddressController = async (req, res) => {
  try {
    const { address, city, pincode, phone, notes } = req.body;
    const currentUser = req.userId;

    // Check for missing fields in the request body
    if (!currentUser || !address || !city || !pincode || !phone || !notes) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
        error: true,
      });
    }

    // Ensure the address does not already exist for the user
    const existingAddress = await Address.findOne({
      userId: currentUser,
      address,
      city,
      pincode,
      phone,
    });

    if (existingAddress) {
      return res.status(400).json({
        success: false,
        message: "Address already exists!",
        error: true,
      });
    }

    const payload = {
      userId: currentUser,
      address,
      city,
      pincode,
      phone,
      notes,
    };

    // Save the new address to the database
    const newAddress = new Address(payload);
    const savedAddress = await newAddress.save();

    return res.status(201).json({
      success: true,
      data: savedAddress,
      message: "Address added successfully!",
      error: false,
    });
  } catch (e) {
    // Log the error more comprehensively
    console.error("Error adding address:", e.message);
    return res.status(500).json({
      success: false,
      message: e.message || "Failed to add address. Please try again later.",
      error: true,
    });
  }
};

module.exports = addAddressController;
