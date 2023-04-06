import { Router } from "express";

import { CriarSessaoController } from "../Model/login/useCase/criarSessao/CriarSessaoController";

const iniciarSessao = new CriarSessaoController()

const sessaoRoutes = Router();

sessaoRoutes.post("/", iniciarSessao.handle)
export{sessaoRoutes}