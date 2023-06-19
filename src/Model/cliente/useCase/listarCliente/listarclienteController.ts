import { Request, Response } from "express";
import { ListarClienteUseCase } from "./listarClienteUsecas";

class ListarClienteController {

  async handle(req: Request, res: Response) {
    const listarClienteUsaCase = new ListarClienteUseCase();

    const result = await listarClienteUsaCase.execute();
    return res.status(200).json(result);
  }
}

export { ListarClienteController };
