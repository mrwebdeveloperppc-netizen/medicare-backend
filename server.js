const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allow Admin panel (and localhost for dev)
const allowedOrigins = [
  "https://admin.smarttimely.com",
  "https://smarttimely.com",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// ✅ Default route
app.get("/", (req, res) => {
  res.json({ message: "Medicare API is running 🚀" });
});

// ✅ Config route for admin/frontend
app.get("/api/v1/get_configurations", (req, res) => {
  res.json({
    success: true,
    siteName: "SmartTimely",
    logo: "https://admin.smarttimely.com/assets/logo.png",

    currency: "USD",
    currencySymbol: "$",

    // ✅ Disable payments completely
    paymentGateway: "none",
    paymentGateways: [],
    onlinePaymentEnabled: false,

    razorpayKey: "",
    razorpaySecret: "",
    stripePublicKey: "",
    stripeSecret: "",
    paypalClientId: "",
    paypalSecret: "",
    flutterwaveKey: "",
    flutterwaveSecret: "",

    version: "1.0.0",
    environment: "production",
    apiStatus: "Running ✅",
  });
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
