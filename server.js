// Entry point of the server
import express from "express";
import dotenv from "dotenv";
import pathRouter from "./routes/pathRouter.js";

// Constants
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", pathRouter);

// Server Listener
async function Listener() {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
  });
}
await Listener();
