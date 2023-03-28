import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import AppErrorHandler from "./errors/errorhandler";
const app = express();

const PORT = process.env.PORT || 2222;

app.use(express.json());

app.use(routes);
app.use(AppErrorHandler);
app.listen(PORT, () => {
  console.log("Project started!🚘🚕");
});
