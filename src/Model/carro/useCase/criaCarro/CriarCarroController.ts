import { Request, Response } from "express";
import { CriarCarroUseCase } from "./CriarCarroUseCase";
import { criarcarroSchema } from "../../../../schemas/carro";
import { AppError } from "../../../../errors/AppError";

class CriarCarroController {
    async handle(req: Request, res: Response) {
        const criarCarroUseCase = new CriarCarroUseCase();

        if (!(await criarcarroSchema.isValid(req.body)))
            throw new AppError("Preencha Os Campos Necessários!", 400);

        const result = await criarCarroUseCase.exucete(req.body);

        return res.status(200).json(result);

    }
}

export { CriarCarroController }