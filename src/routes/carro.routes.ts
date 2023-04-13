import { Router } from "express";

import { CriarCarroController } from "../Model/carro/useCase/criaCarro/CriarCarroController";
import { ListarCarroModeloCantroller } from "../Model/carro/useCase/listarModeloCarro/ListarCarroController";
import { ListarCarroEmpresaController } from "../Model/carro/useCase/listarCarroEmpresa/ListarCarroEmpresaController";

const criarCarro = new CriarCarroController();
const listarCarroModelo = new ListarCarroModeloCantroller();
const listarCarroEmpresa = new ListarCarroEmpresaController();

const carroRoutes = Router();

carroRoutes.post("/", criarCarro.handle)
carroRoutes.get("/:modelo", listarCarroModelo.handle);
carroRoutes.get("/:empresaId", listarCarroEmpresa.handle)

export { carroRoutes }