const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const studentRoutes = require("./routes/studentRoutes");

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
      message: "Student Portal API is running!"
        });
        });

        // Student routes
        app.use("/api/students", studentRoutes);

        // Connect to MongoDB
        mongoose
          .connect(process.env.MONGO_URI)
            .then(() => {
                console.log("MongoDB connected successfully");

                    app.listen(PORT, () => {
                          console.log(`Server running on port ${PORT}`);
                              });
                                })
                                  .catch((error) => {
                                      console.error("MongoDB connection failed:", error.message);
                                        });