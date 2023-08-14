import { Municipio, Provincia } from "@prisma/client";
import { IMunicipio, ITipo } from "../IMunicipio";
import { prisma } from "../../../../prisma/client";


class MunicipioRepositorio implements IMunicipio {

    async criar({ nome, provinciaId }: ITipo): Promise<Municipio> {
        const criarMunicipio = await prisma.municipio.create({
            data: {
                nome,
                provinciaId
            }
        })
        return criarMunicipio;
    }

    async listaTodoMunicipio(): Promise<Municipio[]> {
        const listarMunicipios = await prisma.municipio.findMany({ include: { Provincia: true } });

        return listarMunicipios;
    }

    async listarProvinciaId(id: string): Promise<Provincia | undefined> {
        const listarProvinciaId = await prisma.provincia.findUnique({ where: { id } }) || undefined;

        return listarProvinciaId;
    }
    async listarMunicipio(nome: string): Promise<Municipio | undefined> {
        const listaUmMunicipio = await prisma.municipio.findFirst({ where: { nome }, include: { Provincia: true } }) || undefined;

        return listaUmMunicipio;
    }

    async listarMunicipioId(id: string): Promise<Municipio | undefined> {
        const listaMunicipioId = await prisma.municipio.findUnique({ where: { id }, include: { Provincia: true } }) || undefined;

        return listaMunicipioId;
    }
    async apagar(id: string): Promise<void> {
        await prisma.municipio.delete({ where: { id } })

        return
    }
    async atualizar({ id, nome, provinciaId }: ITipo): Promise<Municipio> {
        const atualizarMunicipio = await prisma.municipio.update({ where: { id }, data: { nome, provinciaId } })

        return atualizarMunicipio;

    }

}

export { MunicipioRepositorio }