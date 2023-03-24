import { Router } from "express";

import { CriarClienteController } from "../Model/cliente/useCase/criarCliente/criarClienteController";
import { ListarClienteController } from "../Model/cliente/useCase/listarCliente/listarclienteController";

const listarCliente = new ListarClienteController();
const criarCliente = new CriarClienteController();

const clienteRoutes = Router();

clienteRoutes.post("/", criarCliente.clienteController);
clienteRoutes.get("/", listarCliente.handle);
clienteRoutes.get("/:BI", listarCliente.handleBI);
export { clienteRoutes };
