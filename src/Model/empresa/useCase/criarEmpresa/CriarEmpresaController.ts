import { Request, Response } from "express";
import { criarEmpresaSchema } from "../../../../schemas/empresa";
import { CriarEmpresaUseCase } from "./CriarEmpresaUseCase"
import { AppError } from "../../../../errors/AppError";


class CriarEmpresaController {
    async handle(req: Request, res: Response) {
        const empresaUseCase = new CriarEmpresaUseCase();

        if (!(criarEmpresaSchema.isValid(req.body)))
            throw new AppError("Preencha Os Dados Necessários!", 400)

        const result = await empresaUseCase.execute(req.body);

        return res.status(200).json(result);
    }
}

export { CriarEmpresaController }