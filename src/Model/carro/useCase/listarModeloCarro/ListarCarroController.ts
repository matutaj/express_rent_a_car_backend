import { Request, Response } from "express";
import { ListarCarroModeloUseCase } from "./ListarCarroUseCase";
import { modeloCarroSchema } from "../../../../schemas/carro";
import { AppError } from "../../../../errors/AppError";

class ListarCarroModeloCantroller {
    async handle(req: Request, res: Response) {
        const listarModelo = new ListarCarroModeloUseCase()
        const { modelo } = req.params

        if (!(modeloCarroSchema.isValid(modelo)))
            throw new AppError("Preencha o Modelo", 400)

        const result = await listarModelo.execute(modelo);

        return res.status(200).json(result)
    }
}

export { ListarCarroModeloCantroller }