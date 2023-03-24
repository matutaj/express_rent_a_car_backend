import { Request, Response } from "express";
import { criarClienteSchema } from "../../../../schemas/cliente";
import { CriarClienteUseCase } from "./criarClienteUseCase";

class CriarClienteController {
  async clienteController(req: Request, res: Response) {
    const criarCliente = new CriarClienteUseCase();

    if (!(await criarClienteSchema.isValid(req.body)))
      throw new Error("Erro ao preencher os dados!");

    const result = await criarCliente.execute(req.body);
    return res.status(200).json(result);
  }
}
export { CriarClienteController };
