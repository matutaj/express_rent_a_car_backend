import { Reclamacao } from "@prisma/client";
import { IDadoReclamacao } from "../../repoitorio/IReclamacao";
import { ReclamacaoRepositorio } from "../../repoitorio/implementacao/ReclamacaoRepositorio";
import { ClienteRepositorio } from "../../../cliente/repositorio/Implementacao/ClienteRepository";
import { AppError } from "../../../../errors/AppError";

class CriarReclamacaoUseCase {
    async execute({ clienteId, titulo, descricao }: IDadoReclamacao): Promise<Reclamacao> {
        const repositorio = new ReclamacaoRepositorio();
        const repositorioCliente = new ClienteRepositorio();

        const existeClienteId = repositorioCliente.listarUmCliente(clienteId);

        if (!existeClienteId) {
            throw new AppError("Id não encontrado!");
        }

        const result = await repositorio.criar({ clienteId, descricao, titulo })

        return result
    }

}
export { CriarReclamacaoUseCase }