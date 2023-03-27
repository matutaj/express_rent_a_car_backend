import express from "express";
import { routes } from "./routes";
import "express-async-errors";

const PORT = process.env.PORT || 2222;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log("Project started!🚘🚕");
});
