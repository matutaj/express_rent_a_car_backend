import { Router } from "express";
import { CriarEmpresaController } from "../Model/empresa/useCase/criarEmpresa/CriarEmpresaController";

const criarEmpresa = new CriarEmpresaController();

const empresaRoutes = Router();

empresaRoutes.post("/", criarEmpresa.handle);

export { empresaRoutes }