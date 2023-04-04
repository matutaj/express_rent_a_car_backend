import { TipoContato } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { IAtualizar, ITipoContato } from "../ITipoContato";

class TipoContatoRepositorio implements ITipoContato {
  async criar(descricao: string): Promise<TipoContato> {
    const criarTipoContato = await prisma.tipoContato.create({
      data: { descricao },
    });
     
    return criarTipoContato;
  }
  async listarTipoContato(): Promise<TipoContato[]> {
    const listarTodo = await prisma.tipoContato.findMany();

    return listarTodo;
  }
  async listarTipoContatoId(id: string): Promise<TipoContato | undefined> {
    const listarId =
      (await prisma.tipoContato.findUnique({ where: { id } })) || undefined;
    return listarId;
  }
  async listarUmTipoContato(
    descricao: string
  ): Promise<TipoContato | undefined> {
    const listarUm =
      (await prisma.tipoContato.findFirst({
        where: {
           descricao:descricao 
          },
      })) || undefined;

    return listarUm;
  }
  async atualizar({ id, descricao }: IAtualizar): Promise<TipoContato> {
    const atualizar = await prisma.tipoContato.update({
      where: { id },
      data: { descricao },
    });

    return atualizar;
  }
  async apagar(id: string): Promise<void> {
    await prisma.tipoContato.delete({ where: { id } });
    return;
  }
}
export { TipoContatoRepositorio };
