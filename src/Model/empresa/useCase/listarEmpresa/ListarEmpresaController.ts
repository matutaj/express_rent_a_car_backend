import { Request, Response } from "express";
import { ListarEmpresaUseCase } from "./ListarEmpresaUseCase";


class ListarEmpresaController {
    async handle(req: Request, res: Response) {
        const empresaUseCase = new ListarEmpresaUseCase();

        const result = await empresaUseCase.execute();

        return res.status(200).json(result);
    }
}

export { ListarEmpresaController }