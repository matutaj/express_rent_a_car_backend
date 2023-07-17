import { Reclamacao } from "@prisma/client";
import { IDadoReclamacao, IReclamacao } from "../IReclamacao";
import { prisma } from "../../../../prisma/client";

class ReclamacaoRepositorio implements IReclamacao {
    async criar({ clienteId, titulo, descricao }: IDadoReclamacao): Promise<Reclamacao> {
        const criarReclamacao = await prisma.reclamacao.create({
            data: {
                clienteId, titulo, descricao
            }
        })
        return criarReclamacao;
    }
    async listarReclamacao(): Promise<Reclamacao[] | undefined> {
        const listar = await prisma.reclamacao.findMany();

        return listar;
    }

    async delete(id: string): Promise<void> {
        await prisma.reclamacao.delete({ where: { id } })
    }
}
export { ReclamacaoRepositorio }