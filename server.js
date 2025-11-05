// Config route for frontend
app.get("/api/v1/get_configurations", (req, res) => {
  res.json({
    success: true,
    siteName: "SmartTimely",
    logo: "https://admin.smarttimely.com/assets/logo.png",

    currency: "USD",
    currencySymbol: "$",

    // ✅ Payment disabled
    paymentGateway: "none",
    paymentGateways: [],
    onlinePaymentEnabled: false, // ✅ Required to avoid frontend crash

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
