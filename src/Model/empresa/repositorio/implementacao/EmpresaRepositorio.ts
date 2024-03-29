import { Empresa } from "@prisma/client";
import { Dados, IEmpresa } from "../IEmpresa";
import { prisma } from "../../../../prisma/client";


class EmpresaRepositorio implements IEmpresa {
    async criar({
        nome,
        imagemUrl,
        nif,
        quantidadeCar,
        descricao }: Dados): Promise<Empresa> {
        const criarempresa = await prisma.empresa.create({
            data: {
                nome,
                imagemUrl,
                nif,
                quantidadeCar,
                descricao
            }
        })

        return criarempresa;
    };

    async listar(): Promise<Empresa[]> {
        const listarTodaEmpresa = await prisma.empresa.findMany({ include: { Carro: true, Contato: true } });
        return listarTodaEmpresa;
    }

    async listarEmpresaId(id: string): Promise<Empresa | undefined> {
        const listarEmpresaId = await prisma.empresa.findUnique({ where: { id }, include: { Carro: true, Contato: true } }) || undefined;

        return listarEmpresaId;
    }
    async listarUmaEmpresa(nome: string): Promise<Empresa | undefined> {
        const listarEmpresaNome = await prisma.empresa.findFirst({ where: { nome }, include: { Carro: true, Contato: true } }) || undefined;

        return listarEmpresaNome;
    }
    async listarNifEmpesa(nif: string): Promise<Empresa | undefined> {
        const nifEmpresa = await prisma.empresa.findFirst({ where: { nif }, include: { Carro: true, Contato: true } }) || undefined;

        return nifEmpresa;
    }

    async apagar(id: string): Promise<void> {
        await prisma.empresa.delete({ where: { id } })
    }
    async atualizar(
        { id,
            nome,
            imagemUrl,
            nif,
            quantidadeCar,
            descricao
        }: Dados)
        : Promise<Empresa> {
        const atualizar =
            await prisma.empresa.update(
                {
                    where: { id },
                    data: {
                        nome,
                        imagemUrl,
                        quantidadeCar,
                        descricao
                    }
                })

        return atualizar;
    }
}

export { EmpresaRepositorio }