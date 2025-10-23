const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Medicare API is running 🚀" });
});

// ✅ Railway automatically provides the port in process.env.PORT
const PORT = process.env.PORT || 8080;

// ✅ "0.0.0.0" allows external access (required for Railway)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});
