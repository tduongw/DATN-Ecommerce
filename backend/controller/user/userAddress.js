// const orderModel = require("../../models/orderModel");

// async function userOrderController(req, res) {
//   try {
//     const { fullName, phoneName, streetAddress, city, notes, zipcode } =
//       req.body;

//     // Kiểm tra thông tin cần thiết
//     if (!fullName) {
//       throw new Error("Please provide full name");
//     }
//     if (!phoneName) {
//       throw new Error("Please provide phone number");
//     }
//     if (!streetAddress) {
//       throw new Error("Please provide street address");
//     }
//     if (!city) {
//       throw new Error("Please provide city");
//     }
//     if (!zipcode) {
//       throw new Error("Please provide zipcode");
//     }

//     // Tạo một đối tượng đơn hàng mới
//     const newOrder = new orderModel({
//       fullName,
//       phoneName,
//       streetAddress,
//       city,
//       notes,
//       zipcode,
//     });

//     // Lưu đơn hàng vào cơ sở dữ liệu
//     const savedOrder = await newOrder.save();

//     res.status(201).json({
//       data: savedOrder,
//       success: true,
//       error: false,
//       message: "Order created successfully!",
//     });
//   } catch (err) {
//     res.json({
//       message: err.message || err,
//       error: true,
//       success: false,
//     });
//   }
// }

// module.exports = userOrderController;
