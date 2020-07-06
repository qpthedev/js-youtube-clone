import "./db";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 5000;

const handleListening = () =>
  console.log(`✅Listening to http://localhost:${PORT}`);

app.listen(PORT, handleListening);
