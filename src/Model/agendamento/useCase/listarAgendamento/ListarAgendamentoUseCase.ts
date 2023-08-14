import { Request, Response } from "express";
import { ListarAgendamentoUseCase } from "./ListarAgendamentoController";
import { listarAgendamentoSchema } from "../../../../schemas/agendamento";
import { AppError } from "../../../../errors/AppError";


class ListaAgendamentoController {
    async handle(req: Request, res: Response) {
        const listarAgendamentoUseCase = new ListarAgendamentoUseCase();
        const { empresaId } = req.params;

        if (!listarAgendamentoSchema.isValid(empresaId))
            throw new AppError("Preencha O parametro!", 400)

        const result = await listarAgendamentoUseCase.execute(empresaId)

        return res.status(200).json(result)

    }
}
export {
    ListaAgendamentoController
}