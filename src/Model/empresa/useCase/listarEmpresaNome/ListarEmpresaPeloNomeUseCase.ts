import { Empresa } from "@prisma/client";
import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";
import { AppError } from "../../../../errors/AppError";


class ListarEmpresaPeloNomeUseCase {
    async execute(nome: string): Promise<Empresa> {
        const repositorioEmpresa = new EmpresaRepositorio();

        const existNome = await repositorioEmpresa.listarUmaEmpresa(nome)
        if (!existNome)
            throw new AppError("No Exist that Empresa", 400)

        return existNome;
    }
}
export { ListarEmpresaPeloNomeUseCase }