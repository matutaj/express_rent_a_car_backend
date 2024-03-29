import { Provincia } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { IAtualizar, IProvincia } from "../IProvincia";

export interface ITipo {
  nome: string;
}
class ProvinciaRpositorio implements IProvincia {
  async criar({ nome }: ITipo): Promise<Provincia> {
    const criaProvincia = await prisma.provincia.create({
      data: { nome },
    });

    return criaProvincia;
  }

  async listarProvinciaId(id: string): Promise<Provincia | undefined> {
    const provinciaId =
      (await prisma.provincia.findUnique({ where: { id } })) || undefined;

    return provinciaId;
  }

  async listarTodaProvincia(): Promise<Provincia[]> {
    const todaProvincia = await prisma.provincia.findMany({ include: { Municipio: true } });

    return todaProvincia;
  }

  async listarUmaProvincia(designacao: string): Promise<Provincia | undefined> {
    const umaProvincia =
      (await prisma.provincia.findFirst({ where: { nome: designacao }, include: { Municipio: true } })) ||
      undefined;

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
