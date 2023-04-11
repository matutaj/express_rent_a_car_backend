import { Request, Response } from "express";
import { listarNifEmpresaSchema } from "../../../../schemas/empresa";
import { AppError } from "../../../../errors/AppError";
import { ListarEmpresaNifUseCase } from "./ListarEmpresaNifUseCase";


class ListarEmpresaNifController {
    async handle(req: Request, res: Response) {
        const empresaUseCase = new ListarEmpresaNifUseCase();
        const { nif } = req.params;
        if (!(await listarNifEmpresaSchema.isValid(req.params)))
            throw new AppError("Nif Obigratório!", 400);

        const result = await empresaUseCase.execute(nif);
        return res.status(200).json(result);
    }
}

export { ListarEmpresaNifController }