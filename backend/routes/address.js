const express = require("express");
const router = express.Router();
const Address = require("../models/Address");

router.post("/addaddress", async(req, res) => {
    try {
        const { userId, address, city, pincode, phone, notes } = req.body;

        const newAddress = new Address({
            userId,
            address,
            city,
            pincode,
            phone,
            notes,
        });

        await newAddress.save();
        res.status(200).json({ success: true, message: "Address added successfully!" });
    } catch (error) {
        console.error("Error adding address:", error);
        res.status(500).json({ success: false, message: "Failed to add address!" });
    }
});

module.exports = router;
