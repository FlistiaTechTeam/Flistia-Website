// filepath: server/index.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendEmail from "./emailHandler.js"; // Add .js extension for ES Modules

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Email API endpoint
app.post("/api/send-email", sendEmail);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
