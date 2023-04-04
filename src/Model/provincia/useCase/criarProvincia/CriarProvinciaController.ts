import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { criarProvinciaSchema } from "../../../../schemas/provincia";
import { CriarProvinciaUsaCase } from "./CriarProvinciaUseCase";

class CriarProvinciaController {
  async handle(req: Request, res: Response) {
    const criarProvinciaUseCase = new CriarProvinciaUsaCase();

    if (!(await criarProvinciaSchema.isValid(req.body)))
      throw new AppError("Preencha o nome da Província!", 400);

    const result = await criarProvinciaUseCase.execute(req.body);

    return res.status(200).json(result);
  }
}

export { CriarProvinciaController };
