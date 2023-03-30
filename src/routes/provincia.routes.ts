import { Router } from "express";

import { CriarProvinciaController } from "../Model/provincia/useCase/criarProvincia/CriarProvinciaController";

const criarProvincia = new CriarProvinciaController();

const provinciaRoutes = Router();
provinciaRoutes.post("/", criarProvincia.handle);

export { provinciaRoutes };
