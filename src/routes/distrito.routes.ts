import { Router } from "express";

import { CriarDistritoController } from "../Model/distrito/useCase/criarDistrito/CriarDistritoController";
import { ListarDistritoController } from "../Model/distrito/useCase/listardistrito/ListarDistritoController";

const criarDistrito= new CriarDistritoController();
const listarDistrito = new ListarDistritoController();


const distritoRoutes = Router();

distritoRoutes.post("/", criarDistrito.handle)
distritoRoutes.get("/", listarDistrito.handle)
export {distritoRoutes}