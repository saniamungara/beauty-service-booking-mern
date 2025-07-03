const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");
const authRoutes = require("./routes/authRoutes"); 
const userRoutes = require("./routes/userRoutes"); 
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
