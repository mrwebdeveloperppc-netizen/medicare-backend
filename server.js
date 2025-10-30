const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Medicare API is running 🚀" });
});

// Config route for frontend
app.get("/api/v1/get_configurations", (req, res) => {
  res.json({
    success: true,
    siteName: "SmartTimely",
    logo: "https://admin.smarttimely.com/assets/logo.png",
    currency: "USD",
    paymentGateway: "Razorpay", // ✅ NOT None
    razorpayKey: "rzp_test_123", // ✅ Dummy so frontend doesn't crash
    stripePublicKey: "", // leave empty if not using Stripe
    version: "1.0.0",
    environment: "production",
    apiStatus: "Running ✅",
  });
});



// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
