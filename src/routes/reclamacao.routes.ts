import { Router } from "express";

import { CriarReclamacaoController } from "../Model/reclamacao/useCase/criarReclamacao/CriarReclamacaoController";

const criarReclamacao = new CriarReclamacaoController();

const reclamacaoRouter = Router();
reclamacaoRouter.post("/", criarReclamacao.handle);
export { reclamacaoRouter }
