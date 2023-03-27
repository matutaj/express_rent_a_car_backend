import { Router } from "express";

import { CriarTipoContatoController } from "../Model/tipoContato/useCase/criaTipocontato/CriarTipoContatoController";

const criarTipoContato = new CriarTipoContatoController();
const tipoContatoRoutes = Router();
tipoContatoRoutes.post("/", criarTipoContato.handle);

export { tipoContatoRoutes };
