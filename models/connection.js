const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://gregoryghezali:XZqYDwnHDoVqTEeD@cluster0.49rr1.mongodb.net/tickethack";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
