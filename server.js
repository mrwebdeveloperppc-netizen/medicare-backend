// Config route for frontend
app.get("/api/v1/get_configurations", (req, res) => {
  res.json({
    success: true,
    siteName: "SmartTimely",
    logo: "https://admin.smarttimely.com/assets/logo.png",

    currency: "USD",
    currencySymbol: "$",

    // ✅ Disable payment completely
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
