import { Router } from "express";
import { clienteRoutes } from "./cliente.routes";
import { contatoRoutes } from "./contato.routes";
import { provinciaRoutes } from "./provincia.routes";
import { tipoContatoRoutes } from "./tipocontato.routes";
import { municipioRoutes } from "./municipio.routes";
import { distritoRoutes } from "./distrito.routes";

const routes = Router();

routes.use("/cliente", clienteRoutes);
routes.use("/tipoContato", tipoContatoRoutes);
routes.use("/contato", contatoRoutes);
routes.use("/provincia", provinciaRoutes);
routes.use("/municipio", municipioRoutes);
routes.use("/distrito", distritoRoutes)
export { routes };
