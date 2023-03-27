import { Router } from "express";
import { clienteRoutes } from "./cliente.routes";

const routes = Router();

routes.use("/cliente", clienteRoutes);

export { routes };
