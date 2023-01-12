// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const morgan = require('morgan');
// const authRoutes = require('./routes/auth');

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(() => console.log("Connect to DB"))
    .catch(console.error);

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use(morgan());

// router middleware
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(PORT, () => `Server running on port ${PORT}`);
