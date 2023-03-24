import { Request, Response } from "express";
import { listarClienteBI } from "../../../../schemas/cliente";
import { ListarClienteUseCase } from "./listarClienteUsecas";

class ListarClienteController {
  async handleBI(req: Request, res: Response) {
    const { BI } = req.params;
    const listarClienteUsaCase = new ListarClienteUseCase();

    if (!(await listarClienteBI.isValid(BI)))
      throw new Error("Número de BI não Foi Identificado!");

    const result = await listarClienteUsaCase.executeId(BI);
    return res.status(200).json(result);
  }

  async handle(req: Request, res: Response) {
    const listarClienteUsaCase = new ListarClienteUseCase();

    const result = await listarClienteUsaCase.execute();
    return res.status(200).json(result);
  }
}

export { ListarClienteController };
