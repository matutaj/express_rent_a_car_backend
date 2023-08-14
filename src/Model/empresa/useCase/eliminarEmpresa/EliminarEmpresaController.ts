import { Request, Response } from "express";
import { EliminarEmpresaUseCase } from "./EliminarEmpresaUseCase";
import { EmpresaId } from "../../../../schemas/empresa";
import { AppError } from "../../../../errors/AppError";


class EliminarEmpresaController {
    async handle(req: Request, res: Response) {
        const eliminarUseCase = new EliminarEmpresaUseCase();
        const { id } = req.params
        if (!(EmpresaId.isValid(id)))
            throw new AppError("Seleciona a Empresa", 400)

        await eliminarUseCase.execute(id)

        return res.status(200).json()
    }
}
export { EliminarEmpresaController }