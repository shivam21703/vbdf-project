import contactRoutes from "./routes/contact.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/api/contact", contactRoutes);
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connect("mongodb://mkjngd_db_user:heyansh2004@ac-w3oefqx-shard-00-00.rkhscw2.mongodb.net:27017,ac-w3oefqx-shard-00-01.rkhscw2.mongodb.net:27017,ac-w3oefqx-shard-00-02.rkhscw2.mongodb.net:27017/?ssl=true&replicaSet=atlas-ms2jeq-shard-0&authSource=admin&appName=Cluster0/viksitDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});