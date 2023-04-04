import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CriarTipoContatoSchema } from "../../../../schemas/tipocontato";
import { CriarTipoContatoUseCase } from "./CriarTipoContatoUseCase";

class CriarTipoContatoController {
  async handle(req: Request, res: Response) {
    const { descricao } = req.body;

    const tipoContatoUseCase = new CriarTipoContatoUseCase();

    if (!( CriarTipoContatoSchema.isValid(req.body)))
      throw new AppError("O Campo deve ser Preenchido!");

    const result = await tipoContatoUseCase.execute(descricao);
    return res.status(200).json(result);
  }
}

export { CriarTipoContatoController };
