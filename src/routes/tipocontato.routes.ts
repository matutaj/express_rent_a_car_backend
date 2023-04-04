import { Router } from "express";

import { CriarTipoContatoController } from "../Model/tipoContato/useCase/criaTipocontato/CriarTipoContatoController";
import { ListarTipoContactoController } from "../Model/tipoContato/useCase/listarTipoContacto/ListarTipoContactoController";


const criarTipoContato = new CriarTipoContatoController();
const listTipoContacto = new ListarTipoContactoController();

const tipoContatoRoutes = Router();

tipoContatoRoutes.post("/", criarTipoContato.handle);
tipoContatoRoutes.get("/", listTipoContacto.handle)
export { tipoContatoRoutes };
