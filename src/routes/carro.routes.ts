import { Router } from "express";

import { CriarCarroController } from "../Model/carro/useCase/criaCarro/CriarCarroController";

const criarCarro = new CriarCarroController();

const carroRoutes = Router();

carroRoutes.post("/", criarCarro.handle)

export { carroRoutes }