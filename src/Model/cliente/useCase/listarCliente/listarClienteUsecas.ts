import { Cliente } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorio/Implementacao/ClienteRepository";

class ListarClienteUseCase {
  async execute(): Promise<Cliente[]> {
    const listarCliente = new ClienteRepositorio();

    const resul = await listarCliente.listarTodoCliente();

    return resul;
  }
}

export { ListarClienteUseCase };
