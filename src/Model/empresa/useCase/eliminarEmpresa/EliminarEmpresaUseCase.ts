import { EmpresaRepositorio } from "../../repositorio/implementacao/EmpresaRepositorio";
import { AppError } from "../../../../errors/AppError";


class EliminarEmpresaUseCase {
    async execute(id: string): Promise<void> {
        const repositorioEmpresa = new EmpresaRepositorio();

        const existEmpresa = await repositorioEmpresa.listarEmpresaId(id)

        if (!existEmpresa)
            throw new AppError("Id da Empresa Não foi encontrada!", 400);

        await repositorioEmpresa.apagar(id);


    }
}

export { EliminarEmpresaUseCase }