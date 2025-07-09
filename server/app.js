const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
require("./config/db");

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/playlists", require("./routes/playlistRoutes"));

// Error handling middleware
app.use(errorHandler);

module.exports = app;
