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
        const listarCarroId = await prisma.carro.findUnique({ where: { id }, include: { Empresa: true } }) || undefined

        return listarCarroId;
    }
    async listarEmpresaId(id: string): Promise<Empresa | undefined> {
        const listarEmpresaId = await prisma.empresa.findUnique({ where: { id } }) || undefined;

        return listarEmpresaId;
    }

    async listarCarro(): Promise<Carro[]> {
        const listarTodoCarro = await prisma.carro.findMany({ include: { Empresa: true } });

        return listarTodoCarro
    }
    async listarCarroPelaEmpresa(id: string): Promise<Carro[]> {
        const listCarro = await prisma.carro.findMany({ where: { empresaId: id }, include: { Empresa: true } })

        return listCarro;
    }

    async listarModeloCarro(mode: string): Promise<Carro[]> {
        const listarModelo = await prisma.carro.findMany({ where: { nome: mode } });

        return listarModelo;
    }

    async listarNomeCarro(nome: string): Promise<Carro[]> {
        const listarCarroNome = await prisma.carro.findMany({ where: { nome } });

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