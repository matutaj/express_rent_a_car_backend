import { Provincia } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { IAtualizar, IProvincia } from "../IProvincia";

class ProvinciaRpositorio implements IProvincia {
  async criar(nome: string): Promise<Provincia> {
    const criaProvincia = await prisma.provincia.create({ data: { nome } });

    return criaProvincia;
  }

  async listarProvinciaId(id: string): Promise<Provincia | undefined> {
    const provinciaId =
      (await prisma.provincia.findUnique({ where: { id } })) || undefined;

    return provinciaId;
  }

  async listarTodaProvincia(): Promise<Provincia[]> {
    const todaProvincia = await prisma.provincia.findMany();

    return todaProvincia;
  }

  async listarUmaProvincia(nome: string): Promise<Provincia | undefined> {
    const umaProvincia =
      (await prisma.provincia.findFirst({ where: { nome } })) || undefined;

    return umaProvincia;
  }

  async apagar(id: string): Promise<void> {
    await prisma.provincia.delete({ where: { id } });
    return;
  }

  async atualizar({ id, nome }: IAtualizar): Promise<Provincia> {
    const atualizarProvincia = await prisma.provincia.update({
      where: { id },
      data: { nome },
    });
    return atualizarProvincia;
  }
}
export { ProvinciaRpositorio };
