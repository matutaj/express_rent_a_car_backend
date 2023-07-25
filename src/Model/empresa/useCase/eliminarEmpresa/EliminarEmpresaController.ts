import { Request, Response } from "express";
import { EliminarEmpresaUseCase } from "./EliminarEmpresaUseCase";
import { eliminarEmpresaId } from "../../../../schemas/empresa";
import { AppError } from "../../../../errors/AppError";


class ElimnarEmpresaController {
    async handle(req: Request, res: Response) {
        const eliminarUseCase = new EliminarEmpresaUseCase();
        const { id } = req.params
        if (!(await eliminarEmpresaId.isValid(id)))
            throw new AppError("Seleciona a Empresa")

        await eliminarUseCase.execute(id)

        return res.status(200).json("Deletado com Sucesso")
    }
}
export { ElimnarEmpresaController }