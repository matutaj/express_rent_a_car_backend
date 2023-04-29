import { Router } from "express";

import { CriarAgendamentoController } from "../Model/agendamento/useCase/CriarAgendamentoController";

const agendar = new CriarAgendamentoController();

const agendaRoutes = Router();

agendaRoutes.post("/", agendar.handle)

export { agendaRoutes }