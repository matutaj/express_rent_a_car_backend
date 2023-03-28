import { Cliente } from ".prisma/client";
import { prisma } from "../../../../prisma/client";
import { Atulizar, ICliente, TCriar } from "../ICliente";

class ClienteRepositorio implements ICliente {
  async criar({ nome, numeroBI, imagemUrl }: TCriar): Promise<Cliente> {
    const cirarCliente = await prisma.cliente.create({
      data: {
        nome,
        numeroBI,
        imagemUrl,
      },
    });

    return cirarCliente;
  }

  async listarUmCliente(id: string): Promise<Cliente | undefined> {
    const listarCliente =
      (await prisma.cliente.findUnique({ where: { id } })) || undefined;

    return listarCliente;
  }

  async pegarPeloBI(BI: string): Promise<Cliente | undefined> {
    const pegarBI =
      (await prisma.cliente.findUnique({
        where: { numeroBI: BI },
      })) || undefined;

    return pegarBI;
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
    numeroBI,
    imagemUrl,
  }: Atulizar): Promise<Cliente> {
    const atualizando = await prisma.cliente.update({
      where: { id },
      data: { nome, numeroBI, imagemUrl },
    });
    return atualizando;
  }
}

export { ClienteRepositorio };
