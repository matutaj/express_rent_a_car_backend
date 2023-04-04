import { Router } from "express";

import { CriarDistritoController } from "../Model/distrito/useCase/criarDistrito/CriarDistritoController";

const criarDistrito= new CriarDistritoController();

const distritoRoutes = Router();

distritoRoutes.post("/", criarDistrito.handle)

export {distritoRoutes}