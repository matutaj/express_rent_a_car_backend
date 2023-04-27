import { Request, Response } from "express";
import { CriarAgendamentoUseCase } from "./CriarAgendamentoUseCase";
import { agendamentoschema } from "../../../schemas/agendamento";
import { AppError } from "../../../errors/AppError";

class CriarAgendamentoController {
    async handle(req: Request, res: Response) {
        const agendamentoUseCase = new CriarAgendamentoUseCase();

        if (!(agendamentoschema.isValid(req.body)))
            throw new AppError("Preencha os Campos Obrigatórios!", 400)

        const result = await agendamentoUseCase.execute(req.body);

        return res.status(200).json(result)
    }
}

export { CriarAgendamentoController }