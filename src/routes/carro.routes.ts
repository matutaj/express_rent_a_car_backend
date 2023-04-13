import { Router } from "express";

import { CriarCarroController } from "../Model/carro/useCase/criaCarro/CriarCarroController";
import { ListarCarroModeloCantroller } from "../Model/carro/useCase/listarCarro/ListarCarroController";

const criarCarro = new CriarCarroController();
const listarCarroModelo = new ListarCarroModeloCantroller();

const carroRoutes = Router();

carroRoutes.post("/", criarCarro.handle)
carroRoutes.get("/:modelo", listarCarroModelo.handle);

export { carroRoutes }