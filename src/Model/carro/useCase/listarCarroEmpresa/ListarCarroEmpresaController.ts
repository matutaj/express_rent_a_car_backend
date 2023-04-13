import { Request, Response } from "express";
import { empresaCarroSchema } from "../../../../schemas/carro";
import { AppError } from "../../../../errors/AppError";
import { ListarCarroEmpresaUseCase } from "./ListarCarroUseCase";

class ListarCarroEmpresaController {
    async handle(req: Request, res: Response) {
        const listarEmpresa = new ListarCarroEmpresaUseCase()
        const { empresaId } = req.body

        if (!(empresaCarroSchema.isValid(empresaId)))
            throw new AppError("Preencha a empresa", 400)

        const result = await listarEmpresa.execute(empresaId);

        return res.status(200).json(result)
    }
}

export { ListarCarroEmpresaController }