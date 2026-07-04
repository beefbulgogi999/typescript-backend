import express, { type Request, type Response } from "express";
import type { User } from "./global/interfaces.js";

// intialise (prepare) app
const app = express();

const PORT = process.env.PORT || 5999;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Bonjour, TypeScript!");
});

app.post("/user", (req: Request<unknown, unknown, User>, res: Response) => {
  const { name, age } = req.body;
  res.status(201).send(`User ${name}, aged ${age}, created!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
