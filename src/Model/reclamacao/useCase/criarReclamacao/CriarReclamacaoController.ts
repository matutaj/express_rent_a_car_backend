import { Request, Response } from "express";
import { CriarReclamacaoUseCase } from "./CriarReclamacaoUseCase";
import { reclamacaoSchema } from "../../../../schemas/reclamacao";
import { AppError } from "../../../../errors/AppError";

class CriarReclamacaoController {
    async handle(req: Request, res: Response) {
        const reclamacaoUseCase = new CriarReclamacaoUseCase();

        if (!(reclamacaoSchema.isValid(req.body)))
            throw new AppError("Preencha os dados Obrigatórios!")

        const result = await reclamacaoUseCase.execute(req.body)

        return res.status(200).json(result)
    }
}
export { CriarReclamacaoController }