import { Empresa } from "@prisma/client";
import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";


class ListarEmpresaUseCase {
    async execute(): Promise<Empresa[]> {
        const repositorio = new EmpresaRepositorio();

        const reult = await repositorio.listar();

        return reult;
    }
}

export { ListarEmpresaUseCase }