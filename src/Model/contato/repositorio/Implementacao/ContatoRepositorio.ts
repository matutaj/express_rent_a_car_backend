import { Cliente, Contato, Empresa, TipoContato } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { IAtualizar, IContato, ITipo } from "../IContato";

class ContatoRpositorio implements IContato {
  async criar({
    contacto,
    tipoContactoId,
    clienteId,
    empresaId,
  }: ITipo): Promise<Contato> {
    const criarContato = await prisma.contato.create({
      data: { contacto, tipoContactoId, clienteId, empresaId },
    });

    return criarContato;
  }
  async listarContatoPorDono(designacao: string): Promise<Contato | undefined> {
    const listar =
      (await prisma.contato.findFirst({
        where: { clienteId: designacao } || { empresaId: designacao },
      })) || undefined;
    return listar;
  }
  async listarContato(contacto: string): Promise<Contato | undefined> {
    const listarId =
      (await prisma.contato.findFirst({ where: { contacto: contacto } })) ||
      undefined;

    return listarId;
  }
  async listarClienteId(id: string): Promise<Cliente | undefined> {
    const listarCliente =
      (await prisma.cliente.findUnique({ where: { id } })) || undefined;

    return listarCliente;
  }

  async listarEmprasaId(id: string): Promise<Empresa | undefined> {
    const listarEmpresa =
      (await prisma.empresa.findUnique({ where: { id } })) || undefined;

    return listarEmpresa;
  }

  async listarTipoContato(id: string): Promise<TipoContato | undefined> {
    const listaTipoContato =
      (await prisma.tipoContato.findUnique({ where: { id } })) || undefined;

    return listaTipoContato;
  }
  async apagar(id: string): Promise<void> {
    await prisma.contato.delete({ where: { id } });
    return;
  }
  async atualizar({
    id,
    contacto,
    tipoContactoId,
    clienteId,
    empresaId,
  }: IAtualizar): Promise<Contato> {
    const atualizar = await prisma.contato.update({
      where: { id },
      data: { contacto, tipoContactoId, clienteId, empresaId },
    });
    return atualizar;
  }
}
export { ContatoRpositorio };
