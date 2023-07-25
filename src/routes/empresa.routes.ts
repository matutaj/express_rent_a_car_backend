import { Router } from "express";
import { CriarEmpresaController } from "../Model/empresa/useCase/criarEmpresa/CriarEmpresaController";
import { ListarEmpresaController } from "../Model/empresa/useCase/listarEmpresa/ListarEmpresaController";
import { ListarEmpresaNifController } from "../Model/empresa/useCase/listarEmpresaNif/LIstarEmpresaNifController";
import { EliminarEmpresaController } from "../Model/empresa/useCase/eliminarEmpresa/EliminarEmpresaController";

const criarEmpresa = new CriarEmpresaController();
const listarEmpresa = new ListarEmpresaController();
const listarEmpresaNif = new ListarEmpresaNifController();
const eliminarEmpresa = new EliminarEmpresaController();
const empresaRoutes = Router();

empresaRoutes.post("/", criarEmpresa.handle);
empresaRoutes.get("/", listarEmpresa.handle);
empresaRoutes.get("/:nif", listarEmpresaNif.handle)
empresaRoutes.delete("/:id", eliminarEmpresa.handle)

export { empresaRoutes }