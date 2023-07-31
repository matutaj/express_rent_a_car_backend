import { Request, Response } from "express";
import { ListarEmpresaPeloNomeUseCase } from "./ListarEmpresaPeloNomeUseCase";
import { listarEmpresapeloNomaSchema } from "../../../../schemas/empresa";
import { AppError } from "../../../../errors/AppError";

class ListarEmpresaPeloNomeController {
    async handle(req: Request, res: Response) {
        const listarEmpresaPeloNomeUseCase = new ListarEmpresaPeloNomeUseCase();
        const { nome } = req.params;

        if (!(await listarEmpresapeloNomaSchema.isValid(req.params)))
            throw new AppError("Preencha o Parametro", 400)

        const result = await listarEmpresaPeloNomeUseCase.execute(nome);

        return res.status(200).json(result)
    }
}
export { ListarEmpresaPeloNomeController }