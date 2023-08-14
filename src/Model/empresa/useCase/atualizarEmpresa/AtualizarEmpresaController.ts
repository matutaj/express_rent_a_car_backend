import { Request, Response } from "express";
import { AtualizarEmpresaUseCase } from "./AtualizarEmpresaUseCase";
import { EmpresaId } from "../../../../schemas/empresa";
import { AppError } from "../../../../errors/AppError";


class AtualizarEmpresaController {
    async handle(req: Request, res: Response) {
        const empresaUseCase = new AtualizarEmpresaUseCase();
        const { id } = req.params
        if (!(EmpresaId.isValid(id)))
            throw new AppError("Coloca o Id da Empresa!", 400)

        const result = await empresaUseCase.execute(id, req.body);

        return res.status(200).json(result);
    }

}
export { AtualizarEmpresaController }