import express from "express";
import { routes } from "./routes";
import "express-async-errors";

const app = express();

const PORT = process.env.PORT || 2222;

app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log("Project started!🚘🚕");
});
