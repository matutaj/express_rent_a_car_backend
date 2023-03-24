import { Cliente } from "@prisma/client";
import { ClienteRepositorio } from "../../repositorio/Implementacao/ClienteRepository";

class ListarClienteUseCase {
  async execute(): Promise<Cliente[]> {
    const listarCliente = new ClienteRepositorio();

    const resul = await listarCliente.listarTodoCliente();

    return resul;
  }
  async executeId(BI: string): Promise<Cliente> {
    const listarUmclienteBI = new ClienteRepositorio();

    const existeClienteBI = await listarUmclienteBI.pegarPeloBI(BI);

    if (!existeClienteBI) throw new Error("Não existe usuário com este BI");

    return existeClienteBI;
  }
}

export { ListarClienteUseCase };
