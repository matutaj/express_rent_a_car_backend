import { Router } from "express";

import { CriarAgendamentoController } from "../Model/agendamento/useCase/criarAgendamento/CriarAgendamentoController";
import { ListaAgendamentoController } from "../Model/agendamento/useCase/listarAgendamento/ListarAgendamentoUseCase";

const agendar = new CriarAgendamentoController();
const listarPorEmpresa = new ListaAgendamentoController();

const agendaRoutes = Router();

agendaRoutes.post("/", agendar.handle)
agendaRoutes.get("/:empresaId", listarPorEmpresa.handle)
export { agendaRoutes }