// Mock configuration route for frontend
app.get("/api/v1/get_configurations", (req, res) => {
  res.json({
    success: true,
    siteName: "SmartTimely",
    logo: "https://admin.smarttimely.com/assets/logo.png",
    currency: "USD",
    paymentGateway: "Razorpay",

    // ✅ Razorpay Public Key (dummy — replace later with real one)
    razorpayKey: "rzp_test_1234567890",

    // ✅ Firebase config object required by frontend
    firebaseConfig: {
      apiKey: "default-api-key",
      authDomain: "default-auth-domain",
      projectId: "default-project-id",
      storageBucket: "default-storage-bucket",
      messagingSenderId: "default-messaging-sender-id",
      appId: "default-app-id",
      measurementId: "default-measurement-id",
      fcmPublicKey: "default-fcm-public-key",
    },

    version: "1.0.0",
    environment: "production",
    apiStatus: "Running ✅",
  });
});
