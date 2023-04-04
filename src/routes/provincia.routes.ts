import { Router } from "express";

import { CriarProvinciaController } from "../Model/provincia/useCase/criarProvincia/CriarProvinciaController";
import { ListarProvinciaController } from "../Model/provincia/useCase/listarProvincia/ListarProvinciaController";



const criarProvincia = new CriarProvinciaController();
const listarProvincia = new ListarProvinciaController();

const provinciaRoutes = Router();
provinciaRoutes.post("/", criarProvincia.handle);
provinciaRoutes.get("/", listarProvincia.handle)

export { provinciaRoutes };
