const Address = require("../../models/addressUser");

// Add a new address
const addAddress = async (req, res) => {
  try {
    const { address, city, pincode, phone, notes } = req.body;
    const currentUser = req.userId;

    // Check if all required fields are present
    if (!currentUser || !address || !city || !pincode || !phone || !notes) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Check if the address already exists for this user
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

    // Create a new address document
    const newAddress = new Address({
      userId: currentUser,
      address,
      city,
      pincode,
      phone,
      notes,
    });

    const savedAddress = await newAddress.save();

    res.status(201).json({
      success: true,
      data: savedAddress,
      message: "Address added successfully!",
      error: false,
    });
  } catch (e) {
    console.error("Error adding address:", e);
    res.status(500).json({
      success: false,
      message: "Failed to add address. Please try again later.",
      error: true,
    });
  }
};

module.exports = { addAddress };
