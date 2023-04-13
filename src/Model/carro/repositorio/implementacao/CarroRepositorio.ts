import { Carro, Empresa } from "@prisma/client";
import { DadosCarro, ICarro } from "../ICarro";
import { prisma } from "../../../../prisma/client";


class CarroRepositorio implements ICarro {
    async criar({
        nome,
        modelo,
        imagemUrl,
        valorAluguel,
        caucao,
        fraquia,
        empresaId, }: DadosCarro): Promise<Carro> {
        const criarCarro = await prisma.carro.create({
            data: {
                nome,
                modelo,
                imagemUrl,
                valorAluguel,
                caucao,
                fraquia,
                empresaId,
            }
        })
        return criarCarro;
    }
    async listarCarroId(id: string): Promise<Carro | undefined> {
        const listarCarroId = await prisma.carro.findUnique({ where: { id } }) || undefined

        return listarCarroId;
    }
    async listarEmpresaId(id: string): Promise<Empresa | undefined> {
        const listarEmpresaId = await prisma.empresa.findUnique({ where: { id } }) || undefined;

        return listarEmpresaId;
    }

    async listarModeloCaroo(modelo: string): Promise<Carro | undefined> {
        const listarModelo = await prisma.carro.findFirst({ where: { modelo } }) || undefined;

        return listarModelo;
    }

    async listarNomeCarro(nome: string): Promise<Carro | undefined> {
        const listarCarroNome = await prisma.carro.findFirst({ where: { nome } }) || undefined;

        return listarCarroNome;
    }

    async apagar(id: string): Promise<void> {
        await prisma.carro.delete({ where: { id } })
    }

    async atualizar({ id, nome,
        modelo,
        imagemUrl,
        valorAluguel,
        caucao,
        fraquia,
        empresaId, }: DadosCarro): Promise<Carro> {
        const atualizarCarro = await prisma.carro.update({
            where: { id }, data: {
                nome,
                modelo,
                imagemUrl,
                valorAluguel,
                caucao,
                fraquia,
                empresaId,
            }
        })

        return atualizarCarro;
    }
}

export { CarroRepositorio }