import "express-async-errors";
import cors from 'cors';
import express from "express";
import { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import AppErrorHandler from "./errors/errorhandler";
import "../src/config/auth/authWithgoogle"
import passport from "passport";

const app = express();

const PORT = process.env.PORT || 2222;
app.use((req: Request, res: Response, next: NextFunction) => {

  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors(
    { origin: `http:/localhost:${PORT}` }
  ));

  next();
})
app.get("/Teste", (req, res) => {
  res.send('<a href="auth/google">Autenticação com Google </a> ')
})

app.get("/auth/google", passport.authenticate('google', { scope: ['email', 'profile'] }))
app.use(express.json());
app.use("/imagem", express.static("uploads"))
app.use(routes);
app.use(AppErrorHandler);
app.listen(PORT, () => {
  console.log("Project started!🚘🚕");
});
