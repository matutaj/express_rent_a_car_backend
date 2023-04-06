import { Router } from "express";
import { CriarLoginController } from "../Model/login/useCase/criarLogin/CriaLoginController";

const loginRoutes = Router();

const criarLogin = new CriarLoginController();

loginRoutes.post("/", criarLogin.handle)
export {loginRoutes}