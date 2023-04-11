import { Router } from "express";
import { CriarEmpresaController } from "../Model/empresa/useCase/criarEmpresa/CriarEmpresaController";
import { ListarEmpresaController } from "../Model/empresa/useCase/listarEmpresa/ListarEmpresaController";

const criarEmpresa = new CriarEmpresaController();
const listarEmpresa = new ListarEmpresaController();

const empresaRoutes = Router();

empresaRoutes.post("/", criarEmpresa.handle);
empresaRoutes.get("/", listarEmpresa.handle)

export { empresaRoutes }