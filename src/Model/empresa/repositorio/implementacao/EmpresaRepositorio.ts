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
        const listarTodaEmpresa = await prisma.empresa.findMany();
        return listarTodaEmpresa;
    }

    async listarEmpresaId(id: string): Promise<Empresa | undefined> {
        const listarEmpresaId = await prisma.empresa.findUnique({ where: { id } }) || undefined;

        return listarEmpresaId;
    }
    async listarUmaEmpresa(nome: string): Promise<Empresa | undefined> {
        const listarEmpresaNome = await prisma.empresa.findFirst({ where: { nome } }) || undefined;

        return listarEmpresaNome;
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
                        nif,
                        quantidadeCar,
                        descricao
                    }
                })

        return atualizar;
    }
}

export { EmpresaRepositorio }