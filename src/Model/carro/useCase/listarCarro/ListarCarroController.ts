import { Request, Response } from "express";
import { ListarCarroUseCase } from "./ListarCarroUsecase";

class ListarCarroController {
    async handle(req: Request, res: Response) {
        const listarCarroUseCase = new ListarCarroUseCase();

        const result = await listarCarroUseCase.execute();

        return res.status(200).json(result)
    }
}

export { ListarCarroController }