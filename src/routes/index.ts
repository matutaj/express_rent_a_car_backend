import { Router } from "express";
import { clienteRoutes } from "./cliente.routes";
import { contatoRoutes } from "./contato.routes";
import { provinciaRoutes } from "./provincia.routes";
import { tipoContatoRoutes } from "./tipocontato.routes";

const routes = Router();

routes.use("/cliente", clienteRoutes);
routes.use("/tipoContato", tipoContatoRoutes);
routes.use("/contato", contatoRoutes);
routes.use("/provincia", provinciaRoutes);
export { routes };
