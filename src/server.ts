import "express-async-errors";
import cors from 'cors';
import express from "express";
import { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import AppErrorHandler from "./errors/errorhandler";


const app = express();

app.use(express.json());
const PORT = process.env.PORT || 2222;
app.use((req: Request, res: Response, next: NextFunction) => {

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization")
  app.use(cors(
    {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true
    }
  ));

  next();
})
app.use("/imagem", express.static("uploads"))
app.use(routes);
app.use(AppErrorHandler);
app.listen(PORT, () => {
  console.log("Project started!🚘🚕");
});
