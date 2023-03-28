import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { CriarContatoSchema } from "../../../../schemas/contato";
import { CriarContatoUseCase } from "./CriarContatoUseCase";

class CriarContatoController {
  async handle(req: Request, res: Response) {
    const contatoUsaCase = new CriarContatoUseCase();

    if (!(await CriarContatoSchema.isValid(req.body)))
      throw new AppError("Preencha Os Campos Obrigatórios!", 400);

    const result = await contatoUsaCase.execute(req.body);
    return res.status(200).json(result);
  }
}

export { CriarContatoController };
