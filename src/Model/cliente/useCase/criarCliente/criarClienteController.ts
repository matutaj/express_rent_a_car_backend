import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { criarClienteSchema } from "../../../../schemas/cliente";
import { CriarClienteUseCase } from "./criarClienteUseCase";

class CriarClienteController {
  async handle(req: Request, res: Response) {
    const criarCliente = new CriarClienteUseCase();

    if (!( criarClienteSchema.isValid(req.body)))
      throw new AppError("Preencha Os Dados Necessários ", 400);

    const result = await criarCliente.execute(req.body);

    return res.status(200).json(result);
  }
}
export { CriarClienteController };
