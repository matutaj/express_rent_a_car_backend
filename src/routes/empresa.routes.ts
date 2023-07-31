import { Router } from "express";
import { CriarEmpresaController } from "../Model/empresa/useCase/criarEmpresa/CriarEmpresaController";
import { ListarEmpresaController } from "../Model/empresa/useCase/listarEmpresa/ListarEmpresaController";
import { ListarEmpresaNifController } from "../Model/empresa/useCase/listarEmpresaNif/LIstarEmpresaNifController";
import { EliminarEmpresaController } from "../Model/empresa/useCase/eliminarEmpresa/EliminarEmpresaController";
import { AtualizarEmpresaController } from "../Model/empresa/useCase/atualizarEmpresa/AtualizarEmpresaController";
import { ListarEmpresaPeloNomeController } from "../Model/empresa/useCase/listarEmpresaNome/ListarEmpresaPeloNomeController";

const criarEmpresa = new CriarEmpresaController();
const listarEmpresa = new ListarEmpresaController();
const listarEmpresaNif = new ListarEmpresaNifController();
const eliminarEmpresa = new EliminarEmpresaController();
const atualizarEmpresa = new AtualizarEmpresaController();
const listarEmpresaNome = new ListarEmpresaPeloNomeController();

const empresaRoutes = Router();

empresaRoutes.post("/", criarEmpresa.handle);
empresaRoutes.get("/", listarEmpresa.handle);
empresaRoutes.get("/listar/:nome", listarEmpresaNome.handle)
empresaRoutes.get("/:nif", listarEmpresaNif.handle)
empresaRoutes.delete("/:id", eliminarEmpresa.handle)
empresaRoutes.put("/:id", atualizarEmpresa.handle)

export { empresaRoutes }