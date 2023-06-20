import { Cliente } from ".prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICliente, TCriar } from "../ICliente";

class ClienteRepositorio implements ICliente {
  async criar({ nome, imagemUrl }: TCriar): Promise<Cliente> {
    const cirarCliente = await prisma.cliente.create({
      data: {
        nome, imagemUrl
      }
    });

    return cirarCliente;
  }

  async listarUmCliente(id: string): Promise<Cliente | undefined> {
    const listarCliente =
      (await prisma.cliente.findUnique({ where: { id } })) || undefined;

    return listarCliente;
  }


  async listarTodoCliente(): Promise<Cliente[]> {
    const listar = await prisma.cliente.findMany();

    return listar;
  }

  async apagar(id: string): Promise<void> {
    await prisma.cliente.delete({
      where: { id },
    });

    return;
  }

  async atualizar({
    id,
    nome,
    imagemUrl,
  }: TCriar): Promise<Cliente> {
    const atualizando = await prisma.cliente.update({
      where: { id },
      data: { nome, imagemUrl },
    });
    return atualizando;
  }
}

export { ClienteRepositorio };
