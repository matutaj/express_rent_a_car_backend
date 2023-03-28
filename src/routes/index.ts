import { Router } from "express";
import { clienteRoutes } from "./cliente.routes";
import { tipoContatoRoutes } from "./tipocontato.routes";

const routes = Router();

routes.use("/cliente", clienteRoutes);
routes.use("/tipoContato", tipoContatoRoutes);
export { routes };
