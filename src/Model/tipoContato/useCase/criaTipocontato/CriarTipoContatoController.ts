import { Request, Response } from "express";
import { CriarTipoContatoSchema } from "../../../../schemas/tipocontato";
import { CriarTipoContatoUseCase } from "./CriarTipoContatoUseCase";

class CriarTipoContatoController {
  async handle(req: Request, res: Response) {
    //const { descricao } = req.body;

    const tipoContatoUseCase = new CriarTipoContatoUseCase();

    if (!(await CriarTipoContatoSchema.isValid(req.body)))
      throw new Error("O Campo deve ser Preenchido!");

    const result = await tipoContatoUseCase.execute(req.body);
    return res.status(200).json(result);
  }
}

export { CriarTipoContatoController };
