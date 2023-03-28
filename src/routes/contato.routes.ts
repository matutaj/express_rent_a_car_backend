import { Router } from "express";
import { CriarContatoController } from "../Model/contato/useCase/criarContato/CriarContatoController";

const criarContato = new CriarContatoController();

const contatoRoutes = Router();
contatoRoutes.post("/", criarContato.handle);

export { contatoRoutes };
