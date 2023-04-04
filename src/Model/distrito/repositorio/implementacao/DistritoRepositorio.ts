import { Distrito, Municipio } from "@prisma/client";
import { IDistrito, ITipo } from "../IDistrito";
import { prisma } from "../../../../prisma/client";


class DistritoRepositorio implements IDistrito{
   async criar({nome, bairro, rua, municipioId }: ITipo): Promise<Distrito> {
        const criarDistrito = await prisma.distrito.create({data:{nome, bairro, rua, municipioId}})

        return criarDistrito;
    }

    async listarDistritoId(id: string): Promise<Distrito | undefined> {
        const distritoId = await prisma.distrito.findUnique({where:{id}}) || undefined;

        return distritoId;
    }

    async listarMunicipioId(id: string): Promise<Municipio | undefined> {
        const municipioId = await prisma.municipio.findUnique({where:{id}}) || undefined;

        return municipioId;
    }

    async listarTodoDistrito(): Promise<Distrito[]> {
        const todoDistrito = await prisma.distrito.findMany();

        return todoDistrito;
    }

    async listarUmDistristo(nome: string): Promise<Distrito | undefined> {
        const umDistrito = await prisma.distrito.findFirst({where:{nome}}) || undefined

        return umDistrito;
    }
    async apagar(id: string): Promise<void> {
        await prisma.distrito.delete({where:{id}})
        return;
    }

    async atualizar({ id, nome, bairro, rua, municipioId}: ITipo): Promise<Distrito> {
        const atualizarDistrito = await prisma.distrito.update({where:{id}, data:{nome, bairro, rua, municipioId}})
        
        return atualizarDistrito;
    }
}
export{DistritoRepositorio}